export const validateForm = (email: string, password: string, url: string, dropdownValue: string, serverPath: string, port: string) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 8;
    const isUrlValid = url ? /^(https?:\/\/)?[\w-]+(\.[\w-]+)+.*/.test(url) : true;
    const isServerPathValid = dropdownValue === 'manual' ? true : serverPath.includes('/');
    const isPortValid = dropdownValue === 'manual' ? true : /^\d{4}$/.test(port);
  
    return isEmailValid && isPasswordValid && isUrlValid && isServerPathValid && isPortValid;
  };