// Write your code here

import {ListItemContainer, Heading, Paragraph} from './styledComponents'

const NoteItem = props => {
  const {comment} = props
  const {title, description} = comment
  return (
    <ListItemContainer>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </ListItemContainer>
  )
}
export default NoteItem
