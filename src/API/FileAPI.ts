import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './_firebase-config'

import { uniqId } from '../utils'

/** Class for work with Storage (Firebase) */
export default class FileAPI {
  /** Upload File to Firebase Storage*/
  static async fetchUploadFile(file: File | null) {
    if (file) {
      // Create Ref for folder 'doc' in Storage
      const imageRef = ref(storage, `doc/${file.name + uniqId()}`)

      // Upload file by Ref
      const response = await uploadBytes(imageRef, file)

      // Create Ref for uploaded file
      const upLoadedImageRef = ref(storage, response.metadata.fullPath)

      // Get URL for uploaded file
      const upLoadedFileURL = await getDownloadURL(upLoadedImageRef)

      return upLoadedFileURL
    }

    return null
  }
}
