import { BlobServiceClient } from "@azure/storage-blob";
/**
 *
 * @param {file} file
 * @param {string} containerName
 *
 * @returns {string} fileString
 */
async function FileUpload(file, containerName) {
  try {
    let storageAccount = "<Your Storage account name>";
    let sasToken = "<Your SAS Token>";

    const blobService = new BlobServiceClient(
      `https://${storageAccount}.blob.core.windows.net/${sasToken}`
    );

    const containerClient = blobService.getContainerClient(containerName);

    const blobClient = containerClient.getBlockBlobClient(file[0].file.name);

    const options = {
      blobHTTPHeaders: {
        blobContentType: file[0].file.type,
      },
    };

    const res = await blobClient.uploadBrowserData(file[0].file, options);

    if (res) {
      const fileString = `https://${storageAccount}.blob.core.windows.net/${containerName}/${file[0].file.name}`;
      return fileString;
    }
  } catch (error) {
    throw Error("Error uploading file to Azure");
  }
}

export { FileUpload };
