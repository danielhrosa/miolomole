import React, { useEffect, useState } from 'react';
import * as S from './CastList.style';

export default function CastList(props){
  const [casts, setCasts] = useState([]);

  useEffect(() => props.casts && setCasts(JSON.parse(props.casts)), [])
  return(
    <S.CastContainer>
      <S.CastTitle>Autores e Ilustradores</S.CastTitle>
      <S.CastList>
        {casts.map((item, i) => (
          <S.SliderCard key={item?._id + i}>
            <S.CardPicture src={item.avatar} />
            <S.SliderCardContainer>
              <S.CardTitle>{item.userFullName}</S.CardTitle>
              <S.CardRoles>
                {item.occupation
                  .filter((role) => role !== "admin")
                  .map((role, i) => <div key={i}>{role == "illustrator" ? "Ilustrador" : "Escritor"}</div>)
                }
              </S.CardRoles>
              <S.CardDescription>{item.description}</S.CardDescription>
            </S.SliderCardContainer>
          </S.SliderCard>
        ))}
      </S.CastList>
    </S.CastContainer>
  )
}