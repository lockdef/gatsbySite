import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    margin-bottom: 20px;
    display: block;
  }
`

const ProfileIcon = styled.div`
  width: 150px;
  height: 150px;
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 16px;
  }
`

const ProfileSentence = styled.div`
  margin: auto 0;
  margin-left: 24px;
  padding: auto 0;
  @media (max-width: 480px) {
    margin: 0;
  }
`

const ProfileName = styled.h1`
  font-size: 24px;
  font-family: "Times New Roman";
  @media (max-width: 480px) {
    font-size: 24px;
    font-family: "Times New Roman";
    padding-left: 5px;
    border-left: 5px solid #006a71;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-family: "Times New Roman";
  padding-left: 5px;
  border-left: 5px solid #006a71;
`

const Content = styled.p`
  font-size: 16px;
  font-family: "Arial";
  white-space: pre-line;
`

const List = styled.ul`
  margin-bottom: 5px;
`

const ListItem = styled.li`
  margin-bottom: 1px;
`

// スマホでは非表示にする
const Detail = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`

const Twitter = css`
  width: 90px;
  display: inline-block;
  background-color: #1da1f2;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  text-decoration: none;
  margin-bottom: 10px;
`

const Github = css`
  width: 90px;
  display: inline-block;
  background-color: #24292e;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  text-decoration: none;
  margin-bottom: 10px;
`

const AtCoder = css`
  width: 90px;
  display: inline-block;
  background-color: #333;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  text-decoration: none;
  margin-bottom: 10px;
`

const oldProfile = css`
  width: 90px;
  display: inline-block;
  background-color: rgb(240, 98, 146);
  text-align: center;
  font-weight: bold;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  text-decoration: none;
  margin-bottom: 10px;
`

const Line = styled.hr`
margin
`

const Icon = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;

  display: inline-flex;
  vertical-align: middle;
`

const calcAge = () => {
  const myBirthday = new Date(2002, 11, 18)
  const today = new Date()
  const thisYearBirthday = new Date(
    today.getFullYear(),
    myBirthday.getMonth(),
    myBirthday.getDate()
  )
  const age = today.getFullYear() - myBirthday.getFullYear()
  return today < thisYearBirthday ? age - 1 : age
}

const IndexPage = () => (
  <Layout>
    <SEO title="Profile - defs.dev" />
    <ProfileWrapper>
      <ProfileIcon>
        <Image />
      </ProfileIcon>
      <ProfileSentence>
        <ProfileName>@lockdef (Age: {calcAge()})</ProfileName>
        <Content>{`Webフロントエンジニア && 情報系高専生
          兎田ぺこら推し🐰`}</Content>
      </ProfileSentence>
    </ProfileWrapper>
    <Title>
      <Icon>work</Icon> Career
    </Title>
    <Content>
      2002年11月18日 誕生
      <br />
      2018年 茨城高専入学
      <br />
      2019年 Lefixea Inc. <Detail>エンジニア</Detail>
      <br />
      2020年 メンヘラテクノロジー株式会社 <Detail>Webフロントエンジニア</Detail>
      <br />
      2021年 インヴァスト株式会社 <Detail>Webフロントエンジニア</Detail>
    </Content>
    <Title>
      <Icon>arrow_circle_up</Icon> Activities
    </Title>
    <Content>
      ビジネスコンテンスト 受賞経験 4回
      <br />
      未踏ジュニア2020 採択
      <br />
      未踏2021 採択
      <br />
      約300人規模のCTFコンテスト運営/開発
      <br />
      深層学習関連の開発、LT発表
      <br />
      高専プロコン2021 自由部門 企業賞
    </Content>
    <Title>
      <Icon>build</Icon> Skills
    </Title>
    <Content>
      <strong>Python</strong>
      <List>
        <ListItem>Flask / Django</ListItem>
        <ListItem>TensorFlow / Keras</ListItem>
        <ListItem>Matplotlib</ListItem>
      </List>
      <strong>JavaScript / TypeScript</strong>
      <List>
        <ListItem>Vue.js / Nuxt.js</ListItem>
        <ListItem>React.js / Next.js</ListItem>
      </List>
      <strong>Other</strong>
      <List>
        <ListItem>Unity</ListItem>
        <ListItem>Git / Github</ListItem>
        <ListItem>Docker</ListItem>
        <ListItem>Firebase</ListItem>
      </List>
    </Content>
    <Title>
      <Icon>videogame_asset</Icon> Playing Games
    </Title>
    <Content>
      <List>
        <ListItem>AtCoder</ListItem>
        <ListItem>Minecraft</ListItem>
        <ListItem>Hypixel Skyblock</ListItem>
        <ListItem>Valorant</ListItem>
        <ListItem>Overwatch</ListItem>
        <ListItem>CHUNITHM (rate: 13.5)</ListItem>
        <ListItem>maimai</ListItem>
      </List>
    </Content>
    <Title>
      <Icon>link</Icon> Link
    </Title>
    <Content>
      <Link css={Twitter} to="https://twitter.com/lockdef" target="_blank">
        Twitter
      </Link>
      <Link css={Github} to="https://github.com/Lockdef" target="_blank">
        Github
      </Link>
      <Link css={AtCoder} to="https://atcoder.jp/users/lockdef" target="_blank">
        AtCoder
      </Link>
      <Link
        css={oldProfile}
        to="https://lockdefoldprofile.netlify.app/"
        target="_blank"
      >
        oldProfile
      </Link>
    </Content>
  </Layout>
)

export default IndexPage
