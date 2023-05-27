import Card from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const InfoSectionPreparation = () => {
  return (
    <InfoSectionWrapper
      id={"før-trondheim"}
      className={styles.preparationSection}
    >
      <h2 className={styles.title}>Før du kommer til Trondheim</h2>
      <p>
        Her har vi litt tips for hva det er lurt å tenke på før du reiser
        hjemmefra
      </p>
      <div className={styles.cardContainer}>
        {cardData.map(({ title, icon, description }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
      <p>
        <br />
        TODO: Legge til TODO-liste
      </p>
    </InfoSectionWrapper>
  );
};

export default InfoSectionPreparation;

const cardData = [
  {
    title: "Betal semesteravgift",
    icon: "cash",
    description:
      "Etter du har fått plass på studiet kan du betale semesteravgift på studentweb, det trenger du for å få studentmail+++, så det er greit å gjøre så fort som mulig",
  },
  {
    title: "Pakkeliste",
    icon: "bag",
    description:
      "Vi har samlet våre beste tips til hva du burde pakke med deg når du reiser til Trondheim!",
  },
  {
    title: "Kontaktinformasjon",
    icon: "call",
    description:
      "Her har kan du finne kontaktinformasjonen til diverse personer i Abakus dersom du lurer på noe",
  },
];
