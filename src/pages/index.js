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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileWrapper>
      <ProfileIcon>
        <Image />
      </ProfileIcon>
      <ProfileSentence>
        <ProfileName>@Lockdef</ProfileName>
        <Content>{`Webフロントエンジニアを生業としています
          副業で情報系高専生やってます
          ぺこらの配信を見て生活してます`}</Content>
      </ProfileSentence>
    </ProfileWrapper>
    <Title>
      <Icon>account_box</Icon> Information
    </Title>
    <Content>
      2002年11月18日 誕生
      <br />
      2018年 茨城高専入学
      <br />
      2019年 Lefixea Inc. <Detail>エンジニア</Detail>
      <br />
      2020年 メンヘラテクノロジー株式会社 <Detail>Webフロントエンジニア</Detail>
    </Content>
    <Title>
      <Icon>arrow_circle_up</Icon> Activity
    </Title>
    <Content>
      ビジネスコンテンスト 3度受賞
      <br />
      未踏ジュニア2020採択プロジェクト <Detail>Rocat</Detail>
      <br />
      約300人規模のCTFコンテスト運営/開発 <Detail>NITIC CTF</Detail>
      <br />
    </Content>
    <Title>
      <Icon>build</Icon> Skill
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
        <ListItem>React.js / Nuxt.js</ListItem>
      </List>
      <strong>Other</strong>
      <List>
        <ListItem>Git / Github</ListItem>
        <ListItem>Docker</ListItem>
      </List>
    </Content>
    <Title>
      <Icon>videogame_asset</Icon> Play Game
    </Title>
    <Content>
      <List>
        <ListItem>Minecraft (Hypixel VIP Player)</ListItem>
        <ListItem>Valorant</ListItem>
        <ListItem>HyperScape</ListItem>
        <ListItem>CHUNITHM (rate: 13.5)</ListItem>
        <ListItem>maimai</ListItem>
      </List>
    </Content>
  </Layout>
)

export default IndexPage
