import React, { useEffect, useRef, useState } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate, useLocation } from "react-router-dom";

export const Filter = () => {
  const { REACT_APP_BASE_URL: url } = process.env;

  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select category");

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const addressRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const maxPriceRef = useRef();
  const minPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          handleClick={onChange}
          ref={countryRef}
          name="country"
          placeholder="Country"
        />
        <Input
          defaultValue={query.get("region")}
          handleClick={onChange}
          ref={regionRef}
          name="region"
          placeholder="Region"
        />
        <Input
          defaultValue={query.get("address")}
          handleClick={onChange}
          ref={addressRef}
          name="address"
          placeholder="Address"
        />
        <Input
          defaultValue={query.get("zip_code")}
          handleClick={onChange}
          ref={zipRef}
          name="zip_code"
          placeholder="Zip Code"
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" />
        <SelectAnt value="Select sort" onChange={"onChangeSort"}>
          <SelectAnt.Option value={"asc"}>us</SelectAnt.Option>
          <SelectAnt.Option value={"des"}>kam</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt defaultValue={value} onChange={onChangeCategory}>
          {data
            .filter((value) => value.id !== 67)
            .map((value) => {
              return (
                <SelectAnt.Option key={value.id} value={value?.id}>
                  {value?.name}
                </SelectAnt.Option>
              );
            })}
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min price" />
        <Input ref={maxPriceRef} placeholder="Max price" />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        arrow={{ pointAtCenter: true }}
        trigger="click"
        overlay={menu}
        placement="bottomRight"
      >
        <div>
          <Button type="light">
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>

      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
