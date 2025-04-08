module mellow_farm::protocol {
     use std::string::String;
     use sui::balance::{Self, Balance};
     use std::type_name::{Self, TypeName};

     public struct Moo<CoinType> has drop {}

     public struct Farm<phantom CoinType> has key {
          id: UID,
          balance: Balance<CoinType>,
          partner: String,
          last_harvest: u64,
          moo_supply: Supply<Moo<CoinType>>,
          fee_points: u64,
     }

     public struct FarmCreated has copy, drop {
          id: ID,
          lp: TypeName,
          moo: TypeName,
          fee_points: u64
     }


     public(friend) fun create_farm<CoinType>(
          balance: Balance<CoinType>,
          partner: String,
          ctx: &mut TxContext
     ) {
          let fee_points = 30;
          let mut farm = Farm {
               id: object::new(ctx),
               balance,
               partner,
               last_harvest: 0,
               moo_supply: balance::create_supply(Moo<CoinType>{}),
               fee_points
          };
          event::emit(FarmCreated {
               id: object::id(&farm),
               lp: type_name::get<CoinType>(),
               moo: type_name::get<Moo<CoinType>>(),
               fee_points, 
          });
     }

     public fun deposit<CoinType>()



}