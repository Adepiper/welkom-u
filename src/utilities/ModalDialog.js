import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import coronavirus from '../views/images/coronavirus.svg';

import {
  Spinner,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from 'react-bootstrap';
const customStyles = {
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
    provinceLoading,
    setUserProvince,
    setUserCity,
    userProvince,
  } = props;
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!province) {
      console.log('error');
    }
    setLoading(true);
    setUserCity(city);
    setUserProvince(province);
    stopFetch();
  };

  useEffect(() => {
    setProvince(userProvince);
  }, []);

  const stopFetch = () => {
    closeModal();
    setProvince('');
    setLoading(false);
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
        <div className='world'>
          <img src={coronavirus} alt='' />
          <h3 id='heading'>Filter through your preferences</h3>
          <p id='subheading'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, minus
            ab nihil incidunt rem accusantium
          </p>
        </div>

        <div className='container'>
          <form action='' onSubmit={onSubmit}>
            {provinceLoading ? (
              <Spinner animation='border' />
            ) : (
              <>
                <FormGroup>
                  <FormLabel>Provinces</FormLabel>
                  <FormControl
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value);
                      fetchCities(e.target.value);
                    }}
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
                  <Button className='save-btn' disabled>
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
                  <Button type='submit' className='save-btn' variant='primary'>
                    Filter
                  </Button>
                )}{' '}
                */
              </>
            )}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDialog;
