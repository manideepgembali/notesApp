// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  NotesContainer,
  Input,
  Input1,
  Button,
  NotesItemContainer,
  FormContainer,
  EmptyDiv,
  EmptyImage,
  EmptyHead,
  EmptyPara,
} from './styledComponents'

const Notes = () => {
  const [title, titleFunction] = useState('')
  const [description, descFunction] = useState('')
  const [commentList, commentFunction] = useState([])

  const OnChangeTitle = event => {
    titleFunction(event.target.value)
  }

  const OnChangeDescription = event => {
    descFunction(event.target.value)
  }

  const emptyNotesView = () => (
    <EmptyDiv>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptyPara>Notes you add will appear here</EmptyPara>
    </EmptyDiv>
  )

  const onClickAdd = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      description,
    }
    commentFunction(prevComment => [...prevComment, newComment])
    titleFunction('')
    descFunction('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <NotesContainer>
        <FormContainer onSubmit={onClickAdd}>
          <Input
            type="text"
            placeholder="Title"
            onChange={OnChangeTitle}
            value={title}
          />
          <Input1
            placeholder="Take a Note..."
            onChange={OnChangeDescription}
            value={description}
          />
          <Button type="submit">Add</Button>
        </FormContainer>
      </NotesContainer>

      {commentList.length === 0 ? (
        emptyNotesView()
      ) : (
        <NotesItemContainer>
          {commentList.map(eachComment => (
            <NoteItem key={eachComment.id} comment={eachComment} />
          ))}
        </NotesItemContainer>
      )}
    </MainContainer>
  )
}
export default Notes
