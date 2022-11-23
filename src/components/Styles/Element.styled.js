import styled from 'styled-components';

const SearchBox = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  // border: none;
  // outline: none;
  padding: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-top: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: 15px;
  background-color: #3f51b5;
  color: white;

  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #303f9f;
  }
`;

const P = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
const Gallery = styled.ul`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 20px;
  list-style: none;
`;

const GalleryItem = styled.li`
  display: block;
  flex-basis: calc((100% - 60px) / 4);
  height: auto;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export { SearchBox, P, Form, ButtonIcon, Input, Button, Gallery, GalleryItem };
