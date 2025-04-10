import 'dotenv/config'

const backendURL = process.env.REACT_APP_BACKEND_URL

export default {
  statsCoinsApi: `${backendURL}/api/v1/PKT/pkt/stats/coins`,
  blkUpApi: `${backendURL}/api/v1/PKT/pkt/chain/up`,
  blkDownApi: `${backendURL}/api/v1/PKT/pkt/chain/down`,
  richLApi: `${backendURL}/api/v1/PKT/pkt/stats/richlist`,
  minerLApi: `${backendURL}/api/v1/PKT/pkt/stats/minerlist`,
  addrMetaApi: `${backendURL}/api/v1/PKT/pkt/address`,
  blockApi: `${backendURL}/api/v1/PKT/pkt/block`,
  txApi: `${backendURL}/api/v1/PKT/pkt/tx`,
  pcBlockApi: `${backendURL}/api/v1/PKT/pkt/packetcrypt`,
  pkApi: `${backendURL}/api/v1/PKT/pkt/packetcrypt/stats`,
  txStats: `${backendURL}/api/v1/PKT/pkt/stats/daily-transactions`,
  base: `${backendURL}/api/v1/PKT/pkt`,
  nsApi: `${backendURL}/api/v1/PKT/pkt/ns`
}
