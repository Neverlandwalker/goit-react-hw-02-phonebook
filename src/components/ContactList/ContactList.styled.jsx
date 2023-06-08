import styled from '@emotion/styled';

export const ContactListMarkup = styled.ul`

  width: 1370px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const ContactListItem = styled.li`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 150px;
  border: 1px solid #39bb96;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
`;

export const ContactListHeader = styled.h2`

  margin: 0;
  margin-bottom: auto;
`;

export const ContactListText = styled.p`

  margin: 0;
  font-weight: 600;
  color: #0b5e18;
`;

export const ContactListButton = styled.button`
  width: 100px;
  background-color: #9582ee;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  padding: 5px;
`;