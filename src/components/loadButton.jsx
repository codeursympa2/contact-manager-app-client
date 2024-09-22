import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function LoadingButton({type}) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      onClick={!isLoading ? handleClick : null}
      type="submit"
      className='col-12 mt-2'  size='lg' variant="danger"
    >
      {isLoading ? 'Soumission...' : 'Soummettre'}
    </Button>
  );
}

export default LoadingButton;