import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

interface TermsAndLiscencesProps {
  isHidden: boolean;
}

const TermsAndLiscences: React.FC<TermsAndLiscencesProps> = ({ isHidden }) => {
  const { t } = useTranslation();
  return (
    <Box
      height={"45vh"}
      hidden={isHidden}
      padding={{
        base: "10% 1.9rem 0  1.9rem",
        sm: "2rem 3.5rem 4rem  3.5rem",
        md: "2rem 7rem 0rem 7rem",
        lg: "2rem 10rem 0 10rem",
        xl: "2rem 23.5rem 0 23.5rem",
        "2xl": "2rem 31rem 0 31rem",
      }}
    >
      <Text fontWeight="bold">{t("googleMapsGeneralTermsAndConditions")}</Text>
      <section>
        <Text fontWeight="bold"> {t("scopeReservationChanges")}</Text>
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
    // <Text visibility={isHidden ? "hidden" : "initial"}>
    //   Google Maps General Terms and Conditions of Work2gether UC - May 2020
    //   Scope and Reservation of Changes These general terms and conditions (AGB)
    //   apply to every legal transaction between work2gether (FW) and the client
    //   (AG). Other agreements or arrangements are only valid if expressly agreed
    //   and confirmed in writing with FW. FW provides personnel under temporary
    //   employment contracts and reserves the right to change terms and conditions
    //   for future business relationships. Principle of Equality and Maximum
    //   Duration of Release The AG must immediately check the employment status of
    //   temporary workers and provide relevant information. Compliance with
    //   maximum duration of transfer is monitored, with provisions for adjustment
    //   of hourly rates. The AG must ensure adherence to maximum release periods
    //   and inform FW of any impending industrial actions. Minimum Duty Periods,
    //   Surcharges, and Billing Minimum operating times are specified for
    //   different staff categories. Billing is based on actual hours worked, with
    //   quarterly invoicing and surcharges for public holidays. Procedures for
    //   proof of hours, invoicing objections, and payment terms are outlined.
    //   Obligation to Cooperate and Authority of the Client The AG must provide
    //   necessary permits and cooperate in providing relevant information.
    //   Instructions to temporary workers fall within the AG's authority.
    //   Obligations of the Client The AG must ensure a safe working environment
    //   and comply with applicable regulations. Provision of gender-separate
    //   sanitary facilities and access for FW is required. Obligations of
    //   Work2gether Employees provided are selected according to AG's
    //   requirements, with replacements available if necessary. FW's obligation to
    //   perform is limited to named employees in the hourly certificate.
    //   Recruitment, Placement Fees Placement fees apply if a contractual
    //   relationship is established within a specified period after temporary
    //   worker deployment. Fees vary based on the duration of the previous
    //   transfer. Confidentiality, Data Protection Both parties agree to
    //   confidentiality regarding transmitted data and comply with data protection
    //   laws. FW employees are bound by confidentiality agreements. Cancellation
    //   Policy Fees for personnel order cancellation depend on the timing of
    //   cancellation. Liability of Work2gether and Client FW is liable for proper
    //   selection and provision of temporary workers. The AG is liable for damages
    //   resulting from incomplete or incorrect information provided. Place of
    //   Jurisdiction and Applicable Law Disputes are subject to the jurisdiction
    //   of Berlin, and contracts are governed by German law.
    // </Text>
  );
};

export default TermsAndLiscences;
