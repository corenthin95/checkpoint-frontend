import newStyled from "@emotion/styled";
import {useQuery} from "@apollo/client";
import {queryCountries} from "../api/countries.ts";
import {CountryType} from "../types.ts";
import {Link} from "react-router-dom";

export const HomePage = () => {
  const { data } = useQuery(queryCountries)

  return (
      <HomeWrapper>
        <AddCountryWrapper>
          <NameWrapper>
            <span>Name</span>
            <input placeholder="Write there..."/>
          </NameWrapper>
          <EmojiWrapper>
            <span>Name</span>
            <input placeholder="Write there..."/>
          </EmojiWrapper>
          <CodeWrapper>
            <span>Name</span>
            <input placeholder="Write there..."/>
          </CodeWrapper>
          <AddButton>Add</AddButton>
        </AddCountryWrapper>
        <ListCountries>
          {data?.countries.map((country: CountryType) => (
              <CountryWrapper key={country.code} to={`/${country.code}`}>
                <span>{country.name}</span>
                <span>{country.emoji}</span>
              </CountryWrapper>
          ))}
        </ListCountries>
      </HomeWrapper>
  );
}

const HomeWrapper = newStyled.section`
  display: flex;
  flex-direction: column;
  padding: 5% 20% 5% 20%;
`

const AddCountryWrapper = newStyled.div`
  background: #e0e0e0;
  border: solid 1px #cccccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
 
`
const NameWrapper = newStyled.div`
  display: flex;
  flex-direction: column;
  
`
const EmojiWrapper = newStyled.div`
  display: flex;
  flex-direction: column;
`

const CodeWrapper = newStyled.div`
  display: flex;
  flex-direction: column;
`

const AddButton = newStyled.button`
  background: orange;
`

const ListCountries = newStyled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 5%;
 
`

const CountryWrapper = newStyled(Link)`
  text-decoration: none;
  color: black;
  background: #e0e0e0;
  border: solid 1px #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  transition: transform 100ms;
  
  :hover {
    transform: scale(1.05);
  }

`
