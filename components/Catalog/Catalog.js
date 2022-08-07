import * as S from './Catalog.styles';
import EditableFile from '../EditableFile/EditableFile';
import Editable from '../Editable';
import Button from '../../Elements/Button';
import LogoMiolo from '../../images/js/Logo-miolo';
import randomColor from '../../utils/randomColor';

export default function Catalog(props) {
  const catalogLink1 = props?.texts['catalogo-miolo-mole-1'];
  const catalog1Button = props?.texts['catalogo-miolo-mole-1-botao'];
  const catalogLink2 = props?.texts['catalogo-miolo-mole-2'];
  const catalog2Button = props?.texts['catalogo-miolo-mole-2-botao'];

  const downloadFile = (link) => {
    fetch(link)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Catalogo Miolo Mole";
        link.target = "__blank";
        link.click();
      })
      .catch(console.error);
  }

  return (
    <S.Catalog>
      <Editable textKey="catalogo-titulo" {...props}><S.CatalogoTitle /></Editable>
      {props?.isLoggedIn
        ? <S.CatalogsList>
          <Editable textKey="catalogo-miolo-mole-1-botao" {...props}><S.ButtonText /></Editable>
          <EditableFile textKey="catalogo-miolo-mole-1" link={catalogLink1} {...props} />
          <Editable textKey="catalogo-miolo-mole-2-botao" {...props}><S.ButtonText /></Editable>
          <EditableFile textKey="catalogo-miolo-mole-2" link={catalogLink2} {...props} />
        </S.CatalogsList>
        : (catalogLink1 || catalogLink2)
          ? <S.CatalogsList>
            {catalogLink1 && <Button variation="secondary" label={catalog1Button} onClick={() => downloadFile(catalogLink1)}/>}
            {catalogLink2 && <Button variation="secondary" label={catalog2Button} onClick={() => downloadFile(catalogLink2)}/>}
          </S.CatalogsList>
          : <S.CatalogComingSoon><span>Em breve</span><LogoMiolo color={randomColor()}/></S.CatalogComingSoon>
      }
    </S.Catalog>
  )
}