export const validateInput = (value: string, type: string, setError: (value: string) => void) => {
    switch (type) {
      case 'emailAddress':
        if (!/\S+@\S+\.\S+/.test(value)) {
          setError('Invalid email address');
        } else {
          setError('');
        }
        break;
      case 'password':
        if (value.length < 8) {
          setError('Password must be at least 8 characters');
        } else {
          setError('');
        }
        break;
      case 'URL':
        if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+.*/.test(value)) {
          setError('Invalid URL');
        } else {
          setError('');
        }
        break;
      case 'path': // Assuming this is for server path
        if (!value.includes('/')) {
          setError('Server path must include "/"');
        } else {
          setError('');
        }
        break;
      case 'port': // Assuming this is for server path
        if (!/^\d{4}$/.test(value)) {
          setError('Port must be a 4-digit number');
        } else {
          setError('');
        }
        break;
      default:
        setError('');
        break;
    }
  };