import Modal from 'react-modal';
import React, { useState } from 'react';
import {
  Spinner,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from 'react-bootstrap';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    transition: '0.3s ease-in',
  },
};
Modal.setAppElement('#root');
const ModalDialog = (props) => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    modalIsOpen,
    closeModal,
    provinces,
    fetchCities,
    cities,
    fetchUniversities,
    provinceLoading,
  } = props;

  province ? fetchCities(province) : console.log('no provice');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!province) {
      console.log('error');
    }
    setLoading(true);

    await fetchUniversities({ province, city });
    setLoading(false);
    stopFetch();
  };

  const stopFetch = () => {
    closeModal();
    setProvince('');
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button
          onClick={() => {
            stopFetch();
          }}
        >
          close
        </button>

        <form onSubmit={onSubmit}>
          {provinceLoading ? (
            <Spinner animation='border' />
          ) : (
            <>
              <FormGroup>
                <FormLabel>Provinces</FormLabel>
                <FormControl
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  as='select'
                >
                  {provinces.length > 0
                    ? provinces.map((province, index) => {
                        return (
                          <option
                            key={province.provinceId}
                            value={province.name}
                          >
                            {province.name}
                          </option>
                        );
                      })
                    : 'loading...'}
                </FormControl>
              </FormGroup>
            </>
          )}

          <FormGroup>
            <FormLabel>Provinces</FormLabel>
            <FormControl
              value={city}
              name=''
              onChange={(e) => setCity(e.target.value)}
              as='select'
            >
              {cities.length > 0
                ? cities.map((city, index) => {
                    return (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    );
                  })
                : 'loading...'}
            </FormControl>
          </FormGroup>
          {loading ? (
            <Button variant='primary' disabled>
              <Spinner
                as='span'
                animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Loading...
            </Button>
          ) : (
            <Button type='submit' variant='primary'>
              Filter
            </Button>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default ModalDialog;
