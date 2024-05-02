//import { Category } from "interfaces/Category.interface";

import type { CompanyConfig } from "~/interfaces/Company.interface";

const data: CompanyConfig = {
  id: 1,
  idIdentityDocumentType: 6,
  number: "20541751832",
  name: "CENTRO MEDICO ECOCASMA E.I.R.L.",
  tradeName: "CENTRO MEDICO ECOCASMA E.I.R.L",
  code: "0000",
  country: {
    id: "PE",
    description: "PERÚ",
    active: true
  },
  department: {
    id: "15",
    description: "LIMA",
    active: true
  },
  province: null,
  district: null,
  // idCountry: "PE",
  // idDepartments: "11",
  // idProvinces: "1102",
  // idDistricts: "110201",
  address:
    "MZA. C LOTE. 1 A.H. MINIST. VIVIENDA (A 1 CDRA DE HOSPITAL, EN AV. PERU)",
  telephone: "",
  email: "ecocasma@gmail.com",
  aditionalInformation: "",
  webAddress: "",
  logo:
    "https://cmecocasma.nt-suite.one/storage/uploads/logos/logo_20541751832.jpg",
  api_facturacion: {
    url: "",
    token: ""
  },
  api_search_ruc_dni: {
    url: "",
    token: ""
  }
};

export default { data };
