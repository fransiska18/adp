import { formatDate } from "@angular/common";

export class AdInsConstant {
    public static RestrictionLike = "Like";
    public static RestrictionEq = "Eq";
    public static RestrictionNotIn = "NotIn";
    public static showData = "10,50,100";
    public static TimeoutSession = 6000000;
    public static GetListProduct = "http://creator_websvr:7272/NEW_FINANCING/api/Catalog/getPopularViewByCriteria";
    public static Login = "/UserManagement/HTML5Login";
    public static LoginToken = "/UserManagement/HTML6Login";
    public static Logout = "/UserManagement/LogOut"
    public static GetListOffice = "/RefOffice/GetRefOfficePaging";
    public static GetProvince = "/los/v1/get_provinsi";
    public static GetCityByProvince = "/los/v1/get_kota";
    public static getProspectByProspectNo = "/api/MobileProspectTask/GetProspectByProspectNo";
    public static submitNCProspect = "/api/MobileProspectTask/submitNCProspect";
    public static addCustPersonal = "";
    public static FormDefault = "dashboard/dash-board";

    //GENERAL SETTING
    public static GetBusinessDt = "/GeneralSetting/GetBusinessDate";
    public static AddGeneralSetting = "/GeneralSetting/AddGeneralSetting";
    public static EditGeneralSetting = "/GeneralSetting/EditGeneralSetting";
    public static GetGeneralSettingPaging = "/GeneralSetting/GetGeneralSettingPaging";
    public static GetGeneralSettingById = "/GeneralSetting/GetGeneralSettingById";
    public static GetGeneralSettingValue = "/GeneralSetting/GetGeneralSettingValue";


    //REF OFFICE
    public static GetRefOfficeObj = "/RefOffice/GetRefOfficeObj";
    public static GetRefOfficeActiveAndNonVirtualKeyValue = "/RefOffice/GetRefOfficeActiveAndNonVirtualKeyValue";
    public static GetAllRefOffice = "/RefOffice/GetAllRefOffice";
    public static GetListUpperHierarchyRefOfficeByRefOrgId = "/RefOffice/GetListUpperHierarchyRefOfficeByRefOrgId";
    public static AddRefOffice = "/RefOffice/AddRefOffice";
    public static EditRefOffice = "/RefOffice/EditRefOffice";
    public static DeleteRefOffice = "/RefOffice/DeleteRefOffice";

    //REF OFFICE AREA
    public static GetAllListArea = "/RefOfficeArea/GetAllListArea";
    public static GetRefOfficeAreaPaging = "/RefOfficeArea/GetRefOfficeAreaPaging";
    public static GetRefArea = "/RefOfficeArea/GetRefArea";
    public static AddRefOfficeArea = "/RefOfficeArea/AddRefOfficeArea";
    public static EditRefOfficeArea = "/RefOfficeArea/EditRefOfficeArea";
    public static DeleteRefOfficeArea = "/RefOfficeArea/DeleteRefOfficeArea";
    public static CheckDuplAreaCode = "/RefOfficeArea/CheckDuplAreaCode";

    //ORGANIZATION
    public static GetRefOrg = "/OrganizationDefinition/GetRefOrg";
    public static EditRefOrgWithOldParentId = "/OrganizationDefinition/EditRefOrgWithOldParentId";
    public static DeleteRefOrg = "/OrganizationDefinition/DeleteRefOrg";
    public static GetListAllRefOrg = "/OrganizationDefinition/GetListAllRefOrg";
    public static AddRefOrg = "/OrganizationDefinition/AddRefOrg";
    public static GetRefOrgPaging = "/OrganizationDefinition/GetRefOrgPaging";
    public static GetAllRefBizUnit = "/OrganizationDefinition/GetAllRefBizUnit";
    public static GetOrgJobTitleByMdlStruc = "/OrganizationDefinition/GetOrgJobTitleByMdlStruc";
    public static GetRefBizUnitByOffice = "/OrganizationDefinition/GetRefBizUnitByOffice";
    public static GetAllOrgMdl = "/OrganizationDefinition/GetAllOrgMdl";
    public static GetAllActiveOrgMdlByRefOrgId = "/OrganizationDefinition/GetAllActiveOrgMdlByRefOrgId";
    public static GetOrgMdlPaging = "/OrganizationDefinition/GetOrgMdlPaging";
    public static DeleteOrgMdl = "/OrganizationDefinition/DeleteOrgMdl";
    public static EditOrgMdl = "/OrganizationDefinition/EditOrgMdl";
    public static AddOrgMdl = "/OrganizationDefinition/AddOrgMdl";
    public static GetOrgMdl = "/OrganizationDefinition/GetOrgMdl";
    public static GetOrgMdlByOrgMdlId = "/OrganizationDefinition/GetOrgMdlByOrgMdlId";
    public static GetAllRefBizUnitKeyValuePair = "/OrganizationDefinition/GetAllRefBizUnitKeyValuePair";
    public static DeleteOrgMdlStruc = "/OrganizationDefinition/DeleteOrgMdlStruc";
    public static AddOrgMdlStruc = "/OrganizationDefinition/AddOrgMdlStruc";
    public static EditOrgMdlStruc = "/OrganizationDefinition/EditOrgMdlStruc";
    public static GetOrgMdlStruc = "/OrganizationDefinition/GetOrgMdlStruc";
    public static GetOrgMdlStrucPaging = "/OrganizationDefinition/GetOrgMdlStrucPaging";
    public static GetOrgMdlStrucById = "/OrganizationDefinition/GetOrgMdlStrucById";

    //REF-JOB-TITLE
    public static GetRefJobTitle = "/OrganizationDefinition/GetRefJobTitlePaging";
    public static AddRefJobTitle = "/OrganizationDefinition/AddRefJobTitle";
    public static EditRefJobTitle = "/OrganizationDefinition/EditRefJobTitle";
    public static DeleteRefJobTitle = "/OrganizationDefinition/DeleteRefJobTitle";
    public static GetJobPositionLvl = "/OrganizationDefinition/GetJobPositionLvl";
    public static GetRefJobTitleById = "/OrganizationDefinition/GetRefJobTitleByRefJobTitleId";

    //ORG JOB TITLE
    public static GetOrgJobTitlePaging = "/OrganizationDefinition/GetOrgJobTitlePaging";
    public static AddOrgJobTitle = "/OrganizationDefinition/AddOrgJobTitle";
    public static EditOrgJobTitle = "/OrganizationDefinition/EditOrgJobTitle";
    public static DeleteOrgJobTitle = "/OrganizationDefinition/DeleteOrgJobTitle";
    public static GetOrgJobTitleByOrgJobTitleId = "/OrganizationDefinition/GetOrgJobTitleByOrgJobTitleId";

    //REF-BANK
    public static GetBankPaging = "/RefBank/GetRefBankPaging";
    public static GetBank = "/RefBank/GetBank";
    public static EditRefBank = "/RefBank/EditRefBank";
    public static AddRefBank = "/RefBank/AddRefBank";
    public static DeleteRefBank = "/RefBank/DeleteRefBank";
    public static GetBankByBankCode = "/RefBank/GetBankByBankCode";

    //REF-EMP
    public static GetListEmployee = "/RefEmp/GetRefEmpPaging";
    public static GetRefEmployeeById = "/RefEmp/GetEmp"
    public static AddRefEmp = "/RefEmp/AddRefEmp";
    public static EditRefEmp = "/RefEmp/EditRefEmp";
    public static DeleteRefEmployee = "/RefEmp/DeleteRefEmp";
    public static AddEmpBankAcc = "/EmpBankAcc/AddEmpBankAcc";
    public static GetEmpBankAccByRefEmpId = "/EmpBankAcc/GetEmpBankAccByRefEmpId";
    public static AddRefEmpAndEmpBankAcc = "/RefEmp/AddRefEmpAndEmpBankAcc";
    public static EditRefEmpAndEmpBankAcc = "/RefEmp/EditRefEmpAndEmpBankAcc";
    public static DeleteRefEmpAndEmpBankAcc = "/RefEmp/DeleteRefEmpAndEmpBankAcc";
    public static GetListEmployeebyRefEmpId = "/EmpPosition/GetListEmployeebyRefEmpId";
    public static GetEmpListByOfficeIdAndIsActive = "/RefEmp/GetEmpListByOfficeIdAndIsActive";

    //EMP_POSITION
    public static GetEmpPositionPaging = "/EmpPosition/GetEmpPositionPaging";
    public static GetEmpByEmpPositionId = "/EmpPosition/GetEmpByEmpPositionId";
    public static AddEmpPosition = "/EmpPosition/AddEmpPosition";
    public static EditEmpPosition = "/EmpPosition/EditEmpPosition";
    public static DeleteEmpPosition = "/EmpPosition/DeleteEmpPosition";
    public static GetListUserEmployee = "/EmpPosition/GetListUserEmployee";

    //REF-USER
    public static GetRefUserPaging = "/UserManagement/GetRefUserPaging";
    public static AddRefUser = "/UserManagement/AddRefUser";
    public static EditRefUser = "/UserManagement/EditRefUser";
    public static ChangePassword = "/UserManagement/ChangePassword";
    public static GetRefUser = "/UserManagement/GetRefUser";
    public static GetUserByUsername = "/UserManagement/GetUserByUsername";
    public static ValidatePwd = "/UserManagement/ValidatePwd";
    public static GetCountRefUserByRefEmpId = "/UserManagement/GetCountRefUserByRefEmpId";
    public static ResetPassword = "/UserManagement/ResetPassword";

    //REF-ROLE
    public static GetRefRolePaging = "/UserManagement/GetRefRolePaging";
    public static AddRefRole = "/UserManagement/AddRefRole";
    public static EditRefRole = "/UserManagement/EditRefRole";
    public static DeleteRefRole = "/UserManagement/DeleteRefRole";
    public static GetRefRoleByRefRoleId = "/RefRole/GetRefRoleByRefRoleId";
    public static GetRefRole = "/RefRole/GetRefRole";
    public static GetListDataCurrentUser = "/UserManagement/GetListDataCurrentUser";
    public static GetRefRoleByEmpPositionId = "/RefRole/GetRefRoleByEmpPositionId";
    public static EditUserTitleRole = "/UserManagement/EditUserTitleRole";
    public static AddUserTitleRole = "/UserManagement/AddUserTitleRole";
    public static AssignRoleToUsers = "/UserManagement/AssignRoleToUsers";
    public static GetUserTitleRoleByEmpPositionIdAndRefRoleId = "/UserManagement/GetUserTitleRoleByEmpPositionIdAndRefRoleId";

    //ZIPCODE
    public static GetRefZipcodePaging = "/RefZipcode/GetRefZipcodePaging";
    public static GetRefZipCode = "/RefZipcode/GetRefZipcode";
    public static GetRefProvDistrictObj = "/RefProvDistrict/GetRefProvDistrict";
    public static EditRefZipcode = "/RefZipcode/EditRefZipCode";
    public static AddRefZipcode = "/RefZipcode/AddRefZipCode";
    public static DeleteRefZipcode = "/RefZipcode/DeleteRefZipCode"

    //BUSINESS UNIT
    public static GetBusinessUnitPaging = "/OrganizationDefinition/GetRefBizUnitPaging";
    public static GetRefBizUnit = "/OrganizationDefinition/GetRefBizUnit";
    public static AddRefBizUnit = "/OrganizationDefinition/AddRefBizUnit";
    public static EditRefBizUnit = "/OrganizationDefinition/EditRefBizUnit";

    //REF COY
    public static GetRefCoyPaging = "/RefCoy/GetRefCoyPaging";
    public static GetRefCoy = "/RefCoy/GetRefCoy";
    public static EditRefCoy = "/RefCoy/EditRefCoy";
    public static GetCoyBodPaging = "/CoyBod/GetCoyBodPaging";
    public static AddCoyBod = "/CoyBod/AddCoyBOD";
    public static EditCoyBod = "/CoyBod/EditCoyBOD";
    public static DeleteCoyBod = "/CoyBod/DeleteCoyBOD";
    public static GetCoyBod = "/CoyBod/GetCoyBod";
    public static GetCommissionerPaging = "/CoyCommissioner/GetCoyCommissionerPaging";
    public static AddCoyCommissioner = "/CoyCommissioner/AddCoyCommissioner";
    public static EditCoyCommissioner = "/CoyCommissioner/EditCoyCommissioner";
    public static DeleteCoyCommissioner = "/CoyCommissioner/DeleteCoyCommissioner";
    public static GetCoyCommissioner = "/CoyCommissioner/GetCoyCommissioner";

    //REF TAX OFFICE
    public static GetAllActiveRefTaxOffice = "/RefTaxOffice/GetAllActiveRefTaxOffice";

    //REF MASTER
    public static GetRefMasterList = "/RefMaster/GetRefMasterList";
    public static GetRefMastersByCriteria = "/RefMaster/GetRefMastersByCriteria";
    public static GetRefMaster = "/RefMaster/GetRefMaster";
    public static GetRefMasterListByTypeCode = "/RefMaster/GetRefMasterListByTypeCode";
    public static GetRefMasterListKeyValuePair = "/RefMaster/GetRefMasterListKeyValuePair";
    public static AddRefMaster = "/RefMaster/AddRefMaster";
    public static EditRefMaster = "/RefMaster/EditRefMaster";
    public static GetRefMasterType = "/RefMaster/GetRefMasterType";
    public static DeleteRefMaster = "/RefMaster/DeleteRefMaster";
    public static GetRefMasterPaging = "/RefMaster/GetRefMasterPaging";

    //REF PROV DISTRICT
    public static GetRefProvDistrictPaging = "/RefProvDistrict/GetRefProvDistrictPaging";

    //MENU
    public static GetRefFormPaging = "/MenuManagement/GetRefFormPaging";
    public static GetAllActiveRefFormByRefRoleId = "/MenuManagement/GetAllActiveRefFormByRefRoleId";
    public static GetRefFormByRefFormId = "/MenuManagement/GetRefFormByRefFormId";
    public static EditRefForm = "/MenuManagement/EditRefForm";
    public static AddRefForm = "/MenuManagement/AddRefForm";
    public static DeleteRefForm = "/MenuManagement/DeleteRefForm";
    public static AssignRoleToForms = "/MenuManagement/AssignRoleToForms";
    public static GetAllAuthFormsByRefRoleId = "/MenuManagement/GetAllAuthFormsByRefRoleId";
    public static GetAuthByRefFormIdAndRefRoleId = "/MenuManagement/GetAuthByRefFormIdAndRefRoleId";
    public static UpdateFormFeatureAuthForm = "/MenuManagement/UpdateFormFeatureAuthForm";
    public static GetAllActiveRefFormAndPathExist = "/MenuManagement/GetAllActiveRefFormAndPathExist";
    public static GetAllActiveRefForm = "/MenuManagement/GetAllActiveRefForm";



    //FORM FEATURE
    public static GetListRefFeature = "/RefFeature/GetListRefFeature";
    public static GetRefFeatureByComponent = "/RefFeature/GetRefFeatureByComponent";

    //HOLIDAY
    public static GetAllActiveHolidaySchmH = "/Holiday/GetAllActiveHolidaySchmH";
    public static GetHolidayPaging = "/Holiday/GetHolidayPaging";
    public static AddHolidaySchmH = "/Holiday/AddHolidaySchmH";
    public static AddHolidaySchmD = "/Holiday/AddHolidaySchmD";
    public static AddHolidaySchmDUntilYear = "/Holiday/AddHolidaySchmDUntilYear";
    public static GetHolidaySchmH = "/Holiday/GetHolidaySchmH";
    public static EditHolidaySchmHOnly = "/Holiday/EditHolidaySchmHOnly";
    public static DeleteHolidaySchmH = "/Holiday/DeleteHolidaySchmH";
    public static DeleteHolidaySchmD = "/Holiday/DeleteHolidaySchmD";
    public static GetHolidayDetailPaging = "/Holiday/GetHolidayDetailPaging";

    //USER SESSION LOG
    public static SelectRole = "/UserSessionLog/SelectRole";

    //NOTIFICATION
    public static NotificationPost = "/Message/Post";

    //REF CURR
    public static GetRefCurrPaging = "/RefCurr/GetRefCurrPaging";
    public static AddRefCurr = "/RefCurr/AddRefCurr";
    public static EditRefCurr = "/RefCurr/EditRefCurr";
    public static GetRefCurr = "/RefCurr/GetRefCurr";
    public static AddExchangeRate = "/RefCurr/AddExchangeRate";
    public static EditExchangeRate = "/RefCurr/EditExchangeRate";
    public static GetExchangeRate = "/RefCurr/GetExchangeRate";

    //GENERIC
    public static GetObjectBySQL = "/Generic/GetObjectBySQL";
    public static AddObjectBySQL = "/Generic/AddObjectBySQL";
    public static UpdateObjectBySQL = "/Generic/UpdateObjectBySQL";
    public static DeleteObjectBySQL = "/Generic/DeleteObjectBySQL";

    //WORKHOUR
    public static GetListOfWorkingHourSchm = "/WorkHour/GetListOfWorkingHourSchm";
    public static GetWorkHourSchmHPaging = "/WorkHour/GetWorkHourSchmHPaging";
    public static AddWorkingHourSchmH = "/WorkHour/AddWorkingHourSchmH";
    public static EditWorkingHourSchmH = "/WorkHour/EditWorkingHourSchmH";
    public static GetWorkingHourSchmH = "/WorkHour/GetWorkingHourSchmH";
    public static GetWorkingHourSchmD = "/WorkHour/GetWorkingHourSchmD";
    public static DeleteWorkingHourSchmH = "/WorkHour/DeleteWorkingHourSchmH";
    
    //QUEUE
    public static AddQueue = "http://R3App-Server/FOUNDATION/RabbitMq/AddQueue";
    
    //REF MODULE
    public static GetListRefModuleKeyValue = "/RefModule/GetListRefModuleKeyValue";
}
