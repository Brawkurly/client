// KAMIS API : git public 전환 전 수정 필요
export const API_KEY = "4dbe24c1-28fe-4c88-aa03-9fe7c8f36a98";
export const KAMIS_URL = `http://www.kamis.co.kr/service/price/xml.do?action=dailySalesList&p_cert_key=${API_KEY}&p_cert_id=heo3793&p_returntype=json`;

export const kamis = {
  dome: () => KAMIS_URL,
};
