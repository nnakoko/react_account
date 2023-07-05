import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { userState } from "../../store/userState";
import { SecoundaryButton } from "../atoms/button/SecondaryButton";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Nana${val}`,
    image: "https://source.unsplash.com/FilM6ng7VGQ",
    email: "12345@example.com",
    phone: "090-0000-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwicth = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecoundaryButton onClick={onClickSwicth}>切り替え</SecoundaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
