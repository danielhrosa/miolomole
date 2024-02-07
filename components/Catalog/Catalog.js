import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../Elements/Button';
import Form from '../../Elements/Form';
import Modal from '../../Elements/Modal/Modal';
import Container from '../Container';
import Editable from '../Editable';
import EditableImage from '../EditableImage';
import { catalogFieldsFunction, catalogFieldsState, gridTemplate } from './Catalog.constants';
import { useRouter } from 'next/router';
import * as S from './Catalog.styles';
import ComingSoon from '../ComingSoon/ComingSoon';
import PDFReader from '../PDFReader/PDFReader';
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';
import { useAppProvider } from '../../store/appProvider';

export default function Catalog({ catalogs, context = '', book, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const catalogsParsed = catalogs ? JSON.parse(catalogs) : [];
  const [fields, setFields] = useState(catalogFieldsState())
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [catalog, setCatalog] = useState("");
  const [isPDFReaderOpen, setIsPDFReaderOpen] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const variables = Object.entries(fields).reduce((obj, [key, { value }]) => ({ ...obj, [key]: value }), {})
    const hasEmpty = Object.entries(variables).some(([key, value]) => key !== "_id" && !value)
    if (hasEmpty) {
      toast.error('Por favor preencha todos os campos')
      return;
    }
    if (fields?._id?.value) {
      const res = await axios.put('/api/catalog', { ...variables, context })
      if (res.status === 200) {
        toast.success('Catalogo criado!')
        setIsOpen(false);
        router.replace(router.asPath, null, { scroll: false });
      } else {
        toast.error('Erro ao criar catalogo')
      }
    } else {
      delete variables._id
      const res = await axios.post('/api/catalog', { ...variables, context })
      if (res.status === 200) {
        toast.success('Catalogo criado!')
        setIsOpen(false);
        router.replace(router.asPath, null, { scroll: false });
      } else {
        toast.error('Erro ao criar catalogo')
      }
    }
  };

  const handleDeleteCatalog = async ({ _id, label }) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar o catalogo ${label}?`)
    if (!confirm) { return false };
    const res = await axios.delete('/api/catalog', { data: _id })
    if (res.status === 200) {
      router.replace(router.asPath, null, { scroll: false });
      toast.success('Catalogo excluido')
    } else {
      toast.error('Erro ao excluir catalogo')
    }
  }

  const catalogFields = catalogFieldsFunction({ fields, setFields, setIsOpen, onSubmit })

  const formProps = { gridTemplate, fields: catalogFields, setFields };

  const defaultOptions = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const openModal = (catalog) => {
    setIsOpen(!isOpen);
    catalog && setFields((oldFields) => {
      const newFields = { ...oldFields };
      newFields._id.value = catalog?._id;
      newFields.link.value = catalog?.link;
      newFields.background.value = catalog?.background;
      newFields.label.value = catalog?.label;
      newFields.color.value = catalog?.color;
      return newFields;
    })
  }

  const downloadFile = (link) => {
    setIsLoading(true);
    fetch(link)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Catalogo Miolo Mole";
        link.target = "__blank";
        link.click();
      })
      .finally(() => { setIsLoading(false); })
      .catch((err) => { console.error(err); setIsLoading(false); });
  }

  const openPdfReader = (catalog) => {
    setCatalog(catalog);
    setIsPDFReaderOpen(!isPDFReaderOpen);
  };

  return (
    <S.Catalog isLoggedIn={isLoggedIn}>
      <EditableImage {...props} textKey={`catalogo-background${context}`}><S.CatalogBg /></EditableImage>
      <Container>
        <S.CatalogWrapper>
          <Editable textKey={`catalogo-titulo${context}`} {...props}><S.CatalogoTitle /></Editable>
          {isLoggedIn
            ? (
              <S.CatalogListWrapper>
                <S.CatalogsList>
                  {catalogsParsed.map((catalog, i) => (
                    <S.CatalogItem key={i}>
                      <Button variation="primary" color={catalog.color} label={catalog.label} onClick={() => openModal(catalog)} />
                      <Button className="delete" onClick={(e) => { e.stopPropagation(); handleDeleteCatalog(catalog); }} type="delete" />
                    </S.CatalogItem>
                  ))}
                </S.CatalogsList>
                <Button variation="primary" label="+ Adicionar" onClick={() => openModal()} />
              </S.CatalogListWrapper>
            ) : !!catalogsParsed?.length
              ? (
                <S.CatalogsList>
                  {catalogsParsed.map((catalog, i) => (
                    <Button key={i} variation="primary" color={catalog.color} label={catalog.label} onClick={() => openPdfReader(catalog)} />
                  ))}
                </S.CatalogsList>
              ) : <ComingSoon />
          }
        </S.CatalogWrapper>
      </Container>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={() => { setIsOpen(!isOpen); setFields(catalogFieldsState()) }}>
          <S.Title>{fields?.link?.value ? 'Editar' : 'Criar'} catalogo</S.Title>
          <Form {...formProps} />
        </Modal>
      )}
      {isPDFReaderOpen && (
        <S.Modal isOpen={isPDFReaderOpen} setIsOpen={() => { setIsPDFReaderOpen(!isPDFReaderOpen); }}>
          {isLoading
            ? (
              <Lottie
                options={defaultOptions}
                height={300}
                width={300}
              />
            ) : (
              <PDFReader catalog={catalog}>
                <Button key="download" variation="primary" label="BAIXAR" onClick={() => downloadFile(`${catalog.link}`)} />
              </PDFReader>
            )
          }
        </S.Modal>
      )}
    </S.Catalog >
  )
}