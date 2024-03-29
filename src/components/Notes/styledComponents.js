// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
`
export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  width: 80%;
  height: 180px;
  border-radius: 5px;
  box-shadow: 0px 4px 16px #d3d9e0;
`
export const Input = styled.input`
  border: none;
  margin-bottom: 10px;
  outline: none;
`
export const Input1 = styled.textarea`
  border: none;
  outline: none;
`
export const Button = styled.button`
  background-color: #4c63b6;
  width: 50px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  align-self: flex-end;
  margin-right: 20px;
`
export const NotesItemContainer = styled.ul`
  display: flex;
`

export const FormContainer = styled.form`
  border: none;
  display: flex;
  flex-direction: column;
`
export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 800;
  color: #334155;
  margin-bottom: 15px;
  text-align: center;
`
export const EmptyPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #475569;
  margin-bottom: 15px;
  text-align: center;
`

export const EmptyImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  margin-top: 20px;
`
