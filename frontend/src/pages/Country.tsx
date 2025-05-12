import newStyled from "@emotion/styled";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import {queryCountry} from "../api/country.ts";

export const CountryPage = () => {
    const { code } = useParams<{code: string}>()
    const { data } = useQuery(queryCountry, {
        variables: {code},
    })

    const country = data?.country


    return (
        <CountryWrapper>
            <span>{country?.emoji}</span>
            <span>Name: {country?.name}({country?.code})</span>
            <span>Continent: {country?.continent?.name}</span>
        </CountryWrapper>
    );
}

const CountryWrapper = newStyled.section`
  display: flex;
  flex-direction: column;
  padding: 5% 20% 5% 20%;
`
