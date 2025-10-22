import ContactMap from "../../components/ContactMap";
import ContactSection from "../../components/ContactSection";

export default function Contact(props) {
  
  return (
    <div>
      <ContactMap />
      <ContactSection {...props} />
    </div>
  )

}
