import Modal from 'react-modal';
import React, { useState } from 'react';
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
  const {
    modalIsOpen,
    closeModal,
    provinces,
    fetchCities,
    cities,
    fetchUniversities,
  } = props;

  province ? fetchCities(province) : console.log('no provice');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!province) {
      console.log('error');
    }

    await fetchUniversities({ province, city });
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
          <select
            value={province}
            name=''
            onChange={(e) => setProvince(e.target.value)}
          >
            {provinces.length > 0
              ? provinces.map((province, index) => {
                  return (
                    <option key={province.provinceId} value={province.name}>
                      {province.name}
                    </option>
                  );
                })
              : 'loading...'}
          </select>
          <select
            value={city}
            name=''
            onChange={(e) => setCity(e.target.value)}
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
          </select>
          <input type='submit' value='filter' />
        </form>

        <div className='modal-dialog modal-dialog-centered'>...</div>
      </Modal>
    </div>
  );
};

export default ModalDialog;
