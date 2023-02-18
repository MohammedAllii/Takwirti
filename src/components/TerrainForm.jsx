import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStorie } from '../features/stories/storieSlice'

function StorieForm() {
  const [nom, setTitre] = useState('')
const [description, setDescription] = useState('')
const [adresse, setDuree] = useState('')
const [prix, setCode] = useState('')
const [image, setCouleur] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createStorie({ nom,description,adresse,prix,image }))
    setTitre('')
    setDescription('')
    setDuree('')
    setCode('')
    setCouleur('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='titre'>Nom du Terrain</label>
          <input
            type='text'
            name='nom'
            id='nom'
            value={nom}
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='duree'>Adresse</label>
          <input
            type='text'
            name='adresse'
            id='adresse'
            value={adresse}
            onChange={(e) => setDuree(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='code'>Prix par match</label>
          <input
            type='number'
            name='prix'
            id='prix'
            value={prix}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Image du terrain</label>
          <input
            type='file'
            name='image'
            id='image'
            value={image}
            onChange={(e) => setCouleur(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Terrain
          </button>
        </div>
      </form>
      <br />
    </section>
  )
}

export default StorieForm
