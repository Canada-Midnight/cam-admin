/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";

// Images
import team2 from "assets/images/team-1.jpg";
import MDBadge from "../../../components/MDBadge";
import MDButton from "../../../components/MDButton";

export default function data() {
  function Members({ name, domain, camId }) {
    return (
      <MDBox display="flex" alignItems="left" lineHeight={1} width={5}>
        <MDBox ml={0} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography display="block" variant="caption" color="secondary" fontWeight="small">
            {domain}
          </MDTypography>
          <MDTypography display="block" variant="caption" color="secondary">
            {camId}
          </MDTypography>
        </MDBox>
      </MDBox>
    );
  }
  function Prestige({ category, description, amount, date, recommender, recCam }) {
    return (
      <MDBox display="flex" alignItems="center" lineHeight={1} width="100%">
        <MDBox ml={1} lineHeight={1}>
          <MDTypography display="block" variant="caption" fontWeight="medium">
            {category}
          </MDTypography>
          <MDTypography variant="caption" color="secondary" fontWeight="small">
            {description}
          </MDTypography>
          <MDTypography variant="button" color="secondary" fontWeight="medium">
            {amount}
          </MDTypography>
          <MDTypography variant="button" color="secondary" fontWeight="medium">
            {date}
          </MDTypography>
          <MDTypography display="block" variant="caption" fontWeight="medium">
            {recommender}
          </MDTypography>
          <MDTypography display="block" variant="caption" color="secondary" fontWeight="small">
            {recCam}
          </MDTypography>
        </MDBox>
      </MDBox>
    );
  }

  return {
    columns: [
      { Header: "member", accessor: "member", width: "20%", align: "left" },
      { Header: "category", accessor: "category", width: "25%", align: "left" },
      { Header: "amount", accessor: "amount", width: "10%", align: "left" },
      { Header: "date given", accessor: "dateGiven", width: "15%", align: "center" },
      { Header: "recommended by", accessor: "givenBy", align: "left" },
      { Header: "action", accessor: "approve", align: "right" },
      { Header: "", accessor: "cancel", align: "left" },
    ],

    rows: [
      {
        member: <Members image={team2} name="Michael S." domain="CND-015" camId="CA2013101504" />,
        category: (
          <Prestige category="Admin. Work" description="Creating a new administrative panel." />
        ),
        amount: <Prestige amount="10" />,
        dateGiven: <Prestige date="2022-03-12" />,
        givenBy: <Prestige recommender="Mr. Patate" recCam="CA2020110101" />,
        approve: (
          <MDBox>
            <MDButton variant="text" size="small" color="success">
              <Icon fontSize="large">check</Icon>&nbsp;approve
            </MDButton>
          </MDBox>
        ),
        cancel: (
          <MDBox ml={-4}>
            <MDButton variant="text" size="small" color="error">
              <Icon fontSize="large">cancel</Icon>&nbsp;Deny
            </MDButton>
          </MDBox>
        ),
      },
      {
        member: <Members image={team2} name="Michael S." domain="CND-015" camId="CA2013101504" />,
        category: (
          <Prestige category="Admin. Work" description="Creating a new administrative panel." />
        ),
        amount: <Prestige amount="42" />,
        dateGiven: <Prestige date="2022-01-12" />,
        givenBy: <Prestige recommender="Mr. Patate" recCam="CA2000110101" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="success" variant="text" size="sm" />
          </MDBox>
        ),
        approve: (
          <MDBox>
            <MDButton variant="text" size="small" color="success">
              <Icon fontSize="large">check</Icon>&nbsp;approve
            </MDButton>
          </MDBox>
        ),
        cancel: (
          <MDBox ml={-4}>
            <MDButton variant="text" size="small" color="error">
              <Icon fontSize="large">cancel</Icon>&nbsp;Deny
            </MDButton>
          </MDBox>
        ),
      },
      {
        member: <Members image={team2} name="Michael S." domain="CND-015" camId="CA2013101504" />,
        category: <Prestige category="Something you know?" description="HE DID NOTHING." />,
        amount: <Prestige amount="-142" />,
        dateGiven: <Prestige date="2022-01-12" />,
        givenBy: <Prestige recommender="Mr. Patate" recCam="CA2000110101" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="error" variant="text" size="sm" />
          </MDBox>
        ),
        approve: (
          <MDBox>
            <MDButton variant="text" size="small" color="success">
              <Icon fontSize="large">check</Icon>&nbsp;approve
            </MDButton>
          </MDBox>
        ),
        cancel: (
          <MDBox ml={-4}>
            <MDButton variant="text" size="small" color="error">
              <Icon fontSize="large">cancel</Icon>&nbsp;Deny
            </MDButton>
          </MDBox>
        ),
      },
    ],
  };
}
