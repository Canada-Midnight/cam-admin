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
import { Icon } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import MDProgress from "../../../components/MDProgress";
import MDButton from "../../../components/MDButton";

export default function data() {
  function Members({ name, domain, camId }) {
    return (
      <MDBox display="flex" alignItems="left" lineHeight={1} width={5}>
        <MDBox ml={-1} lineHeight={1}>
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
  function Standard({ name, language }) {
    return (
      <MDBox display="flex" alignItems="left" lineHeight={1}>
        <MDBox ml={0} lineHeight={1}>
          <MDTypography display="flex" variant="button" fontWeight="medium" fontSize="small">
            {name}
          </MDTypography>
          <MDTypography display="flex" variant="button" fontWeight="small" fontSize="small">
            {language}
          </MDTypography>
        </MDBox>
      </MDBox>
    );
  }
  function Grade({ color, value }) {
    return (
      <MDBox display="flex" alignItems="center">
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {value}%
        </MDTypography>
        <MDBox ml={0.5} width="10rem">
          <MDProgress variant="gradient" color={color} value={value} />
        </MDBox>
      </MDBox>
    );
  }
  return {
    columns: [
      { Header: "member", accessor: "member", width: "20%", align: "left" },
      { Header: "standard", accessor: "standard", align: "left" },
      { Header: "grade", accessor: "grade", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "reception date", accessor: "received", align: "left" },
      { Header: "grade", accessor: "action", align: "center" },
    ],

    rows: [
      {
        member: <Members image={team2} name="Michael S." domain="CND-015" camId="CA2013101504" />,
        standard: <Standard name="Content and Conscent" language="French" />,
        grade: <Grade value="25" color="warning" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Received" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        received: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDButton color="info" size="large" variant="text">
            <Icon size="large">grading</Icon>&nbsp;grade
          </MDButton>
        ),
      },
      {
        member: <Members image={team2} name="Michael S." domain="CND-015" camId="CA2013101504" />,
        standard: <Standard name="Volunteer Incentive Program" language="English" />,
        grade: <Grade value="75" color="success" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Passed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        received: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            31/08/2021
          </MDTypography>
        ),
        action: (
          <MDButton color="info" size="large" variant="text">
            <Icon size="large">grading</Icon>&nbsp;grade
          </MDButton>
        ),
      },
      {
        member: <Members image={team2} name="Michael S." domain="CND-015" camId="CA2013101504" />,
        standard: <Standard name="Prestige" language="Spanish" />,
        grade: <Grade value="50" color="error" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="failed" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        received: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            31/08/2021
          </MDTypography>
        ),
        action: (
          <MDButton color="info" size="large" variant="text">
            <Icon size="large">grading</Icon>&nbsp;grade
          </MDButton>
        ),
      },
    ],
  };
}
