import * as S from './ContactMap.style.js'

export default function ContactMap() {
  return (
    <S.ContactMap>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316.261710636703!2d-46.6953573!3d-23.5277955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef876972e06ef%3A0x1e53964ab2a69105!2sR.%20Vespasiano%2C%20581%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005044-050!5e0!3m2!1spt-BR!2sbr!4v1784054253620!5m2!1spt-BR!2sbr"
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
