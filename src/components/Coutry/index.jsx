import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RestCountriesContext } from "../../context/restCountries";
import Header from "../Header";
import {
  Container,
  Button,
  CoutryWrapper,
  CoutryFlag,
  CoutryInfos,
  DescriptionsWrapper,
  Description,
  BorderCountries,
} from "./Coutry.style";
import { Title } from "../Title.style";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Coutry({ data }) {
  const { currentPage } = useContext(RestCountriesContext);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Button
          onClick={() => navigate(`/${currentPage}`)}
          className="default-shadow"
        >
          <FaArrowLeftLong /> Back
        </Button>
        <CoutryWrapper>
          <CoutryFlag>
            <img src={data.flag} alt={data.alt} />
          </CoutryFlag>
          <CoutryInfos>
            <DescriptionsWrapper>
              <Title size="2.4" className="coutry-name">
                {data.name}
              </Title>
              <Description>
                Native name: <span>{data.nativeName}</span>
              </Description>
              <Description>
                Population: <span>{data.population}</span>
              </Description>
              <Description>
                Region: <span>{data.region}</span>
              </Description>
              <Description>
                Sub Region: <span>{data.subRegion}</span>
              </Description>
              <Description>
                Capital: <span>{data.capital}</span>
              </Description>
            </DescriptionsWrapper>
            <DescriptionsWrapper>
              <Description>
                Top Level Domain: <span>{data.topLevelDomain}</span>
              </Description>
              <Description>
                Currencies: <span>{data.currencies.join(", ")}</span>
              </Description>
              <Description>
                Languages: <span>{data.languages.join(", ")}</span>
              </Description>
            </DescriptionsWrapper>
            {data.borders && (
              <BorderCountries className="border-countries">
                <p>Border Countries:</p>
                <div>
                  {data.borders.map((item) => (
                    <Button
                      key={item}
                      className="border-labels default-shadow"
                      onClick={() =>
                        navigate(`/coutry/${encodeURIComponent(item)}`)
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </BorderCountries>
            )}
          </CoutryInfos>
        </CoutryWrapper>
      </Container>
    </>
  );
}
