export function getPath(path: string): string {
    const basePath = import.meta.env.BASE_URL;
    const cleanPath = path.replace(/^\//, '');
    return `${basePath}/${cleanPath}`;
  }