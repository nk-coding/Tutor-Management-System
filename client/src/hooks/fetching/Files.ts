import axios from './Axios';

export async function getAttendancePDF(tutorialId: string, date: string): Promise<Blob> {
  const response = await axios.get(`pdf/attendance/${tutorialId}/${date}`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf',
    },
  });

  if (response.status === 200) {
    return new Blob([response.data], { type: 'application/pdf' });
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}

export async function getScheinStatusPDF(): Promise<Blob> {
  const response = await axios.get('/pdf/scheinstatus/', {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf',
    },
  });

  if (response.status === 200) {
    return new Blob([response.data], { type: 'application/pdf' });
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}

export async function getCredentialsPDF(): Promise<Blob> {
  const response = await axios.get('/pdf/credentials/', {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf',
    },
  });

  if (response.status === 200) {
    return new Blob([response.data], { type: 'application/pdf' });
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}

export async function getSingleCorrectionCommentMarkdown(
  tutorialId: string,
  sheetId: string,
  teamId: string
): Promise<string> {
  const response = await axios.get(`/pdf/markdown/${tutorialId}/${sheetId}/${teamId}`);
  // , {
  //   responseType: 'arraybuffer',
  //   headers: {
  //     Accept: 'application/pdf',
  //   },
  // }

  if (response.status === 200) {
    return response.data;
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}

export async function getSingleCorrectionCommentPDF(
  tutorialId: string,
  sheetId: string,
  teamId: string
): Promise<Blob> {
  const response = await axios.get(`/pdf/correction/${tutorialId}/${sheetId}/${teamId}`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf',
    },
  });

  if (response.status === 200) {
    return new Blob([response.data], { type: 'application/pdf' });
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}

export async function getCorrectionCommentPDFs(tutorialId: string, sheetId: string): Promise<Blob> {
  const response = await axios.get(`/pdf/correction/${tutorialId}/${sheetId}`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/zip',
    },
  });

  if (response.status === 200) {
    return new Blob([response.data], { type: 'application/zip' });
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}

export async function getTutorialXLSX(tutorialId: string): Promise<Blob> {
  const response = await axios.get(`/excel/tutorial/${tutorialId}`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  });

  if (response.status === 200) {
    return new Blob([response.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  }

  return Promise.reject(`Wrong response code (${response.status})`);
}
