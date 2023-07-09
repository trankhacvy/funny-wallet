export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type Network = "devnet" | "testnet" | "mainnet-beta"

export type ShyftBaseResponse<T> = {
  success: boolean
  message: string
  result: T
}

export type GetPortfolioResult = {
  sol_balance: number
  num_tokens: number
  tokens: Array<{
    address: string
    balance: number
  }>
  num_nfts: number
  nfts: Array<{
    key: number
    updateAuthority: string
    mint: string
    data: {
      name: string
      symbol: string
      uri: string
      sellerFeeBasisPoints: number
      creators: Array<{
        address: string
        verified: number
        share: number
      }>
    }
    primarySaleHappened: number
    isMutable: number
  }>
}

export type GetTxHistoryResult = {
  blockTime: number
  meta: {
    err: any
    fee: number
    innerInstructions: Array<{
      index: number
      instructions: Array<{
        parsed: {
          info: {
            mint?: string
            lamports?: number
            newAccount?: string
            owner?: string
            source?: string
            space?: number
            account?: string
            destination?: string
            authorityType?: string
            multisigAuthority?: string
            newAuthority?: string
            signers?: Array<string>
          }
          type: string
        }
        program: string
        programId: string
      }>
    }>
    loadedAddresses: {
      readonly: Array<any>
      writable: Array<any>
    }
    logMessages: Array<string>
    postBalances: Array<number>
    postTokenBalances: Array<{
      accountIndex: number
      mint: string
      owner: string
      programId: string
      uiTokenAmount: {
        amount: string
        decimals: number
        uiAmount: number
        uiAmountString: string
      }
    }>
    preBalances: Array<number>
    preTokenBalances: Array<{
      accountIndex: number
      mint: string
      owner: string
      programId: string
      uiTokenAmount: {
        amount: string
        decimals: number
        uiAmount: number
        uiAmountString: string
      }
    }>
    rewards: Array<any>
    status: {
      Ok: any
    }
  }
  slot: number
  transaction: {
    message: {
      accountKeys: Array<{
        pubkey: string
        signer: boolean
        writable: boolean
      }>
      addressTableLookups: any
      instructions: Array<{
        parsed?: {
          info: {
            account?: string
            amount?: string
            authority?: string
            mint?: string
            destination?: string
            owner?: string
            lamports?: number
            newAccount?: string
            source?: string
            space?: number
            decimals?: number
            freezeAuthority?: string
            mintAuthority?: string
            rentSysvar?: string
            systemProgram?: string
            tokenProgram?: string
            wallet?: string
          }
          type: string
        }
        program?: string
        programId: string
        accounts?: Array<string>
        data?: string
      }>
      recentBlockhash: string
    }
    signatures: Array<string>
  }
}

export type GetCollectionsResult = {
  collections: Array<{
    address: any
    name: string
    family?: string
    nft_count: number
    nfts: Array<{
      name: string
      symbol: string
      royalty: number
      mint: string
      update_authority: string
      metadata_uri: string
      creators: Array<{
        address: string
        share: number
        verified: boolean
      }>
    }>
  }>
}

export type GetAllNFTResult = {
  name: string
  symbol: string
  royalty: number
  image_uri: string
  cached_image_uri: string
  animation_url: string
  cached_animation_url: string
  metadata_uri: string
  description: string
  mint: string
  owner: string
  update_authority: string
  creators: Array<{
    address: string
    verified: boolean
    share: number
  }>
  collection: {
    name: string
    family: string
  }
  attributes: {
    "Unit Type"?: string
    "Unit Number"?: string
    "Unit Location"?: string
    Background?: string
    "Arsenal Back"?: string
    Base?: string
    Outfit?: string
    Outerwear?: string
    Decoration?: string
    Nose?: string
    "Arsenal Front"?: string
    Eyes?: string
    Headwear?: string
    ID?: number
    Rank?: number
  }
  attributes_array: Array<{
    trait_type: string
    value: any
  }>
  files: Array<{
    type: string
    uri: string
  }>
  external_url: string
  primary_sale_happened: boolean
  is_mutable: boolean
  is_loaded_metadata: boolean
}

export type GetNFTResult = {
  name: string
  symbol: string
  royalty: number
  image_uri: string
  cached_image_uri: string
  animation_url: string
  cached_animation_url: string
  metadata_uri: string
  description: string
  mint: string
  owner: string
  update_authority: string
  creators: Array<{
    address: string
    share: number
    verified: boolean
  }>
  collection: {
    address: string
    verified: boolean
  }
  attributes: {
    artist: string
    presented_by: string
    drop: string
  }
  attributes_array: Array<{
    trait_type: string
    value: string
  }>
  files: Array<any>
  external_url: string
  is_loaded_metadata: boolean
  primary_sale_happened: boolean
  is_mutable: boolean
}

export type GetTokenBalanceResult = {
  address: string
  balance: number
  info: {
    name: string
    symbol: string
    image: string
  }
}
