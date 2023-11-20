
import { images, videos, audios, pdfs } from '../Constants/Extensions';

export default function getFileTypeByExtensions(extension) {
  if (images.some((item) => extension.toLowerCase() === item.toLowerCase())) { return 'image' }
  else if (videos.some((item) => extension.toLowerCase() === item.toLowerCase())) { return 'video' }
  else if (audios.some((item) => extension.toLowerCase() === item.toLowerCase())) { return 'audio' } 
  else if (pdfs.some((item) => extension.toLowerCase() === item.toLowerCase())) { return 'pdf' } 
  else { return 'desconhecido' }
}