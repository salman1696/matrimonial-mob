import { HTTP_CLIENT } from "./config/config";


export const getNafatByUserId = (params: any) => {
  console.log('/nafath/user/' + params?.id, 'params');

  return HTTP_CLIENT.get('/nafath/user/' + params?.id);
};
export const getProfile = (params: any) => {
  return HTTP_CLIENT.get('/user/' + params?.id);
};
export const getNafat = (params: any) => {
  return HTTP_CLIENT.get(`/getUserByNationalIdAndMobileNumber?nationalId=${params?.nationalId}&mobileNumber=${params?.phone}`);
};

export const getAsset = (params: any) => {
  return HTTP_CLIENT.get('/asset/user/' + params?.id);
};

export const addAsset = (params: any) => {
  return HTTP_CLIENT.post('/asset/', params);
};

export const addWork = (params: any) => {
  return HTTP_CLIENT.post('/workhistory/', params);
};
export const getWork = () => {
  return HTTP_CLIENT.get('/workhistory/');
};
export const addEducation = (params: any) => {
  return HTTP_CLIENT.post('/education/', params);
};

export const getEducation = (params: any) => {
  return HTTP_CLIENT.get('/education/');
};


export const getAgreement = () => {
  return HTTP_CLIENT.get('/userAgreement/marriage');
};

export const getMarraigeCases = (params: any) => {
  return HTTP_CLIENT.get('/marriageProcess/user/' + params?.id);
};

export const setupMarriageProcess = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess', params);
};

export const initaiteMarriageProcess = (id: string, params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/initiate/' + id, params);
};

export const verifyPartnerOtp = (id: any, params: any) => {
  return HTTP_CLIENT.post('marriageProcess/otp/' + id, params);
};

export const addGuardianWitness = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/addGuardianWitness/' + params?.id, params);
};


export const getAppointment = (params: any) => {
  return HTTP_CLIENT.get('/appointmentSlot?section=' + params.type);
};

export const addMedicalSection = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/addMedicalCenterForMarriage/' + params?.id, params);
};

export const getMedicalCenter = () => {
  return HTTP_CLIENT.get('/medicalCenter');
};

export const changeMedicalCenter = (params: any) => {
  return HTTP_CLIENT.get('/marriageProcess/changeMedicalCenterForMarriage/1'+ params.id);
};

export const addCounsellingSection = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/addCounselingCenterForMarriage/' + params?.id, params);
};

export const getCounsellingCenter = () => {
  return HTTP_CLIENT.get('/counselor');
};

export const changeCounsellingCenter = (params: any) => {
  return HTTP_CLIENT.get('/marriageProcess/changeCounselingCenterForMarriage' + params.id);
};

//terms & condition

export const getTerms = (params: any) => {
  console.log('/marriageProcess/getAllTermsAndConditionsByMarriage/' + params.id)
  return HTTP_CLIENT.get('/marriageProcess/getAllTermsAndConditionsByMarriage/' + params.id);
};

export const addTerms = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/addTermsAndConditionsUser/' + params?.id, params);
};

export const acceptReject = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/approveRejectOrFillTermsAndConditionsUser/' + params?.id, params);
};

export const addRemarkToTerm = (params: any) => {
  return HTTP_CLIENT.post('/marriageProcess/addAdditionalRemarksToTermsAndConditions/' + params?.id, params);
};


