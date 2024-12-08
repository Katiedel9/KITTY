const apiBaseUrl = 'https://prod-69.eastus.logic.azure.com:443/workflows/6683d2045ada46ac9d09e8462bb8add8/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=KYOJESFcKibB1wG0OZffPgyCJNxH2HQXQJ-grK8U-fs'; // Replace with your Logic App endpoint.

document.getElementById('submitBtn').addEventListener('click', async () => {
  const fileName = document.getElementById('fileName').value;
  const userId = document.getElementById('userId').value;
  const userName = document.getElementById('userName').value;
  const fileInput = document.getElementById('fileInput').files[0];

  if (!fileName || !userId || !userName || !fileInput) {
    alert('All fields are required!');
    return;
  }

  const formData = new FormData();
  formData.append('fileName', fileName);
  formData.append('userId', userId);
  formData.append('userName', userName);
  formData.append('file', fileInput);

  try {
    const response = await fetch(apiBaseUrl, { method: 'POST', body: formData });
    const result = await response.json();
    document.getElementById('message').textContent = result.message || 'File uploaded successfully!';
  } catch (error) {
    document.getElementById('message').textContent = 'Upload failed!';
  }
});

document.getElementById('viewBtn').addEventListener('click', () => {
  window.location.href = 'https://kittyblog.z13.web.core.windows.net/'; // Replace this with your Azure Static Website URL.
});
