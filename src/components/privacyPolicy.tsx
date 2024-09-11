import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface PrivacyAndPolicyProps {
  isHidden: boolean;
}
const PrivacyAndPolicy: React.FC<PrivacyAndPolicyProps> = ({ isHidden }) => {
  const { t }: any = useTranslation();

  return (
    <Box
      hidden={isHidden}
      height={"45vh"}
      padding={{
        base: "10% 1.9rem 0  1.9rem",
        sm: "2rem 3.5rem 0  3.5rem",
        md: "2rem 7rem 0rem 7rem",
        lg: "2rem 10rem 0 10rem",
        xl: "2rem 23.5rem 0 23.5rem",
        "2xl": "2rem 31rem 0 31rem",
      }}
    >
      <Text fontWeight="bold" paddingBottom={5}>
        {t("googleMapsGeneralTermsAndConditions")}
      </Text>
      <section>
        <Text decoration={"underline"} fontWeight="bold">
          {t("scopeReservationChanges")}
        </Text>
        <ul>
          {t("scopeReservationChangesList", {
            returnObjects: true,
          }).map((listItem: string, i: number) => (
            <li key={i}>
              <Text>{listItem}</Text>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Text fontWeight="bold">
          {t("principleOfEqualityAndMaximumDurationOfRelease")}
        </Text>
        <ul>
          {t("principleOfEqualityAndMaximumDurationOfReleaseList", {
            returnObjects: true,
          }).map((listItem: string, i: number) => (
            <li key={i}>
              <Text>{listItem}</Text>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Text fontWeight="bold">
          {t("minimumDutyPeriodsSurchargesAndBilling")}
        </Text>
        <ul>
          {t("minimumDutyPeriodsSurchargesAndBillingList", {
            returnObjects: true,
          }).map((listItem: string, i: number) => (
            <li key={i}>
              <Text>{listItem}</Text>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Text fontWeight="bold">{t("scopeAndReservationOfChanges")}</Text>
        <ul>
          {t("scopeReservationChangesList", { returnObjects: true }).map(
            (listItem: string, i: number) => (
              <li key={i}>
                <Text>{listItem}</Text>
              </li>
            )
          )}
        </ul>
      </section>
      <section>
        <Text fontWeight="bold">
          {t("principleOfEqualityAndMaximumDurationOfRelease")}
        </Text>
        <ul>
          {t("principleOfEqualityAndMaximumDurationOfReleaseList", {
            returnObjects: true,
          }).map((listItem: string, i) => (
            <li key={i}>
              <Text>{listItem}</Text>
            </li>
          ))}
        </ul>
      </section>
    </Box>
  );
};

export default PrivacyAndPolicy;
