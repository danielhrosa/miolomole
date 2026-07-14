import * as S from './ContactMap.style.js'

export default function ContactMap() {
  return (
    <S.ContactMap>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316.38272696423!2d-46.6900684!3d-23.525618699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2e702af177%3A0xc1f8096ac024a640!2sMiolo%20Mole%20Editora!5e0!3m2!1spt-BR!2sbr!4v1784053055581!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </S.ContactMap>
  )
}
