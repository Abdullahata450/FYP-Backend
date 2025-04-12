declare const AddAssetToWatchlist: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly symbol: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "wb0v0f7q0ms5e";
                };
                readonly description: "the symbol name to add to the watchlist";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly watchlist_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "watchlist id";
                };
            };
            readonly required: readonly ["watchlist_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddAssetToWatchlistByName: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly symbol: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "w4vw4ifmq7o9e";
                };
                readonly description: "the symbol name to add to the watchlist";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "name of the watchlist";
                };
            };
            readonly required: readonly ["name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCryptoTransferForAccount: {
    readonly body: {
        readonly title: "CreateCryptoTransferRequest";
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "string";
                readonly description: "The amount, denoted in the specified asset, to be withdrawn from the user’s wallet";
            };
            readonly address: {
                readonly type: "string";
                readonly description: "The destination wallet address";
            };
            readonly asset: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["amount", "address", "asset"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "Transfers allow you to transfer assets into your end customer's account (deposits) or out (withdrawal).";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The crypto transfer ID";
                };
                readonly tx_hash: {
                    readonly type: "string";
                    readonly description: "On-chain transaction hash (e.g. 0xabc...xyz)";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["INCOMING", "OUTGOING"];
                    readonly examples: readonly ["INCOMING"];
                    readonly description: "`INCOMING` `OUTGOING`";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["PROCESSING", "FAILED", "COMPLETE"];
                    readonly examples: readonly ["PROCESSING"];
                    readonly description: "`PROCESSING` `FAILED` `COMPLETE`";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Amount of transfer denominated in the underlying crypto asset";
                };
                readonly usd_value: {
                    readonly type: "string";
                    readonly description: "Equivalent USD value at time of transfer";
                };
                readonly network_fee: {
                    readonly type: "string";
                };
                readonly fees: {
                    readonly type: "string";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly description: "Underlying network for given transfer";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly description: "Symbol of crypto asset for given transfer (e.g. BTC )";
                };
                readonly from_address: {
                    readonly type: "string";
                    readonly description: "Originating address of the transfer";
                };
                readonly to_address: {
                    readonly type: "string";
                    readonly description: "Destination address of the transfer";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Timedate when transfer was created";
                };
            };
            readonly "x-stoplight": {
                readonly id: "f986mttnx5c4n";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateWhitelistedAddress: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "The address to be whitelisted";
            };
            readonly asset: {
                readonly type: "string";
                readonly description: "Symbol of underlying asset for the whitelisted address";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique ID for whitelisted address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly description: "Underlying network this address represents";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly description: "Symbol of underlying asset for the whitelisted address";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "The whitelisted address";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of whitelisted address which is either ACTIVE or PENDING. Whitelisted addresses will be subjected to a 24 waiting period. After the waiting period is over the status will become ACTIVE.\n\n`APPROVED` `PENDING`";
                    readonly enum: readonly ["APPROVED", "PENDING"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Timestamp (RFC3339) of account creation.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAllOpenPositions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly cancel_orders: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If true is specified, cancel all open orders before liquidating all positions.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "207": {
            readonly type: "array";
            readonly items: {
                readonly title: "PositionClosedReponse";
                readonly type: "object";
                readonly description: "Represents the result of asking the api to close a position. ";
                readonly properties: {
                    readonly symbol: {
                        readonly type: "string";
                        readonly description: "Symbol name of the asset";
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "Http status code for the attempt to close this position";
                    };
                    readonly body: {
                        readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
                        readonly type: "object";
                        readonly title: "Order";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Order ID";
                            };
                            readonly client_order_id: {
                                readonly type: "string";
                                readonly description: "Client unique order ID";
                                readonly maxLength: 128;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly submitted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly filled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expired_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly failed_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order was replaced by";
                            };
                            readonly replaces: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order replaces";
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID (For options this represents the option contract ID)";
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Asset symbol, required for all order classes except for `mleg`";
                            };
                            readonly asset_class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly notional: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                            };
                            readonly qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                            };
                            readonly filled_qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Filled quantity";
                            };
                            readonly filled_avg_price: {
                                readonly type: "string";
                                readonly description: "Filled average price";
                            };
                            readonly order_class: {
                                readonly type: "string";
                                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                readonly title: "OrderClass";
                                readonly examples: readonly ["bracket"];
                            };
                            readonly order_type: {
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Deprecated in favour of the field \"type\" ";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                readonly title: "OrderType";
                                readonly examples: readonly ["market"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly enum: readonly ["buy", "sell"];
                                readonly title: "OrderSide";
                                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                readonly examples: readonly ["buy"];
                            };
                            readonly time_in_force: {
                                readonly type: "string";
                                readonly title: "TimeInForce";
                                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                readonly examples: readonly ["day"];
                            };
                            readonly limit_price: {
                                readonly type: "string";
                                readonly description: "Limit price";
                            };
                            readonly stop_price: {
                                readonly description: "Stop price";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly title: "OrderStatus";
                                readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                readonly examples: readonly ["new"];
                            };
                            readonly extended_hours: {
                                readonly type: "boolean";
                                readonly description: "If true, eligible for execution outside regular trading hours.";
                            };
                            readonly legs: {
                                readonly type: "array";
                                readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                                readonly items: {
                                    readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                                    readonly type: "object";
                                    readonly title: "Order";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly description: "Order ID";
                                        };
                                        readonly client_order_id: {
                                            readonly type: "string";
                                            readonly description: "Client unique order ID";
                                            readonly maxLength: 128;
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly submitted_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly filled_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly expired_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly canceled_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly failed_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly replaced_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly replaced_by: {
                                            readonly type: "string";
                                            readonly format: "uuid";
                                            readonly description: "The order ID that this order was replaced by";
                                        };
                                        readonly replaces: {
                                            readonly type: "string";
                                            readonly format: "uuid";
                                            readonly description: "The order ID that this order replaces";
                                        };
                                        readonly asset_id: {
                                            readonly type: "string";
                                            readonly format: "uuid";
                                            readonly description: "Asset ID (For options this represents the option contract ID)";
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                            readonly description: "Asset symbol";
                                        };
                                        readonly asset_class: {
                                            readonly type: "string";
                                            readonly title: "AssetClass";
                                            readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                            readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                            readonly "x-examples": {
                                                readonly "example-1": "us_equity";
                                            };
                                            readonly examples: readonly ["us_equity"];
                                        };
                                        readonly notional: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                            readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                                        };
                                        readonly qty: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                            readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                                        };
                                        readonly filled_qty: {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                            readonly description: "Filled quantity";
                                        };
                                        readonly filled_avg_price: {
                                            readonly type: "string";
                                            readonly description: "Filled average price";
                                        };
                                        readonly order_class: {
                                            readonly type: "string";
                                            readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                            readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                            readonly title: "OrderClass";
                                            readonly examples: readonly ["bracket"];
                                        };
                                        readonly order_type: {
                                            readonly type: "string";
                                            readonly deprecated: true;
                                            readonly description: "Deprecated in favour of the field \"type\" ";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                            readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                            readonly title: "OrderType";
                                            readonly examples: readonly ["market"];
                                        };
                                        readonly side: {
                                            readonly type: "string";
                                            readonly enum: readonly ["buy", "sell"];
                                            readonly title: "OrderSide";
                                            readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                            readonly examples: readonly ["buy"];
                                        };
                                        readonly time_in_force: {
                                            readonly type: "string";
                                            readonly title: "TimeInForce";
                                            readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                            readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                            readonly examples: readonly ["day"];
                                        };
                                        readonly limit_price: {
                                            readonly type: "string";
                                            readonly description: "Limit price";
                                        };
                                        readonly stop_price: {
                                            readonly description: "Stop price";
                                            readonly type: "string";
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly title: "OrderStatus";
                                            readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                            readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                            readonly examples: readonly ["new"];
                                        };
                                        readonly extended_hours: {
                                            readonly type: "boolean";
                                            readonly description: "If true, eligible for execution outside regular trading hours.";
                                        };
                                        readonly legs: {
                                            readonly type: "array";
                                            readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                            readonly items: {};
                                        };
                                        readonly trail_percent: {
                                            readonly type: "string";
                                            readonly description: "The percent value away from the high water mark for trailing stop orders.";
                                        };
                                        readonly trail_price: {
                                            readonly type: "string";
                                            readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                                        };
                                        readonly hwm: {
                                            readonly type: "string";
                                            readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                                        };
                                        readonly position_intent: {
                                            readonly type: "string";
                                            readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                            readonly title: "PositionIntent";
                                            readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                            readonly examples: readonly ["buy_to_open"];
                                        };
                                    };
                                    readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                                };
                            };
                            readonly trail_percent: {
                                readonly type: "string";
                                readonly description: "The percent value away from the high water mark for trailing stop orders.";
                            };
                            readonly trail_price: {
                                readonly type: "string";
                                readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                            };
                            readonly hwm: {
                                readonly type: "string";
                                readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                            };
                            readonly position_intent: {
                                readonly type: "string";
                                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                readonly title: "PositionIntent";
                                readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                readonly examples: readonly ["buy_to_open"];
                            };
                        };
                        readonly required: readonly ["notional", "type", "time_in_force"];
                    };
                };
                readonly required: readonly ["symbol", "status"];
                readonly "x-examples": {
                    readonly "example-1": {
                        readonly symbol: "AAPL";
                        readonly status: 200;
                        readonly body: {
                            readonly id: "f7f25e89-939a-4587-aaf6-414a6b3c341d";
                            readonly client_order_id: "52f8574c-96d5-49b6-94c1-2570a268434e";
                            readonly created_at: "2022-02-04T16:53:29.53427917Z";
                            readonly updated_at: "2022-02-04T16:53:29.53427917Z";
                            readonly submitted_at: "2022-02-04T16:53:29.533738219Z";
                            readonly filled_at: any;
                            readonly expired_at: any;
                            readonly canceled_at: any;
                            readonly failed_at: any;
                            readonly replaced_at: any;
                            readonly replaced_by: any;
                            readonly replaces: any;
                            readonly asset_id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                            readonly symbol: "AAPL";
                            readonly asset_class: "us_equity";
                            readonly notional: any;
                            readonly qty: "2";
                            readonly filled_qty: "0";
                            readonly filled_avg_price: any;
                            readonly order_class: "";
                            readonly order_type: "market";
                            readonly type: "market";
                            readonly side: "sell";
                            readonly time_in_force: "day";
                            readonly limit_price: any;
                            readonly stop_price: any;
                            readonly status: "accepted";
                            readonly extended_hours: false;
                            readonly legs: any;
                            readonly trail_percent: any;
                            readonly trail_price: any;
                            readonly hwm: any;
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAllOrders: {
    readonly response: {
        readonly "207": {
            readonly type: "array";
            readonly items: {
                readonly title: "CanceledOrderResponse";
                readonly type: "object";
                readonly "x-examples": {
                    readonly "example-1": {
                        readonly id: "d56ba3ea-6d04-48ce-8175-817e242ee608";
                        readonly status: 200;
                    };
                };
                readonly description: "Represents the result of a request to cancel and order";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "orderId";
                    };
                    readonly status: {
                        readonly type: "integer";
                        readonly description: "http response code";
                        readonly examples: readonly [200];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteOpenPosition: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol_or_asset_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "symbol or assetId";
                };
            };
            readonly required: readonly ["symbol_or_asset_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly qty: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the number of shares to liquidate. Can accept up to 9 decimal points. Cannot work with percentage";
                };
                readonly percentage: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "percentage of position to liquidate. Must be between 0 and 100. Would only sell fractional if position is originally fractional. Can accept up to 9 decimal points. Cannot work with qty";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
            readonly type: "object";
            readonly title: "Order";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Order ID";
                };
                readonly client_order_id: {
                    readonly type: "string";
                    readonly description: "Client unique order ID";
                    readonly maxLength: 128;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly submitted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly filled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly expired_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly failed_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_by: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order was replaced by";
                };
                readonly replaces: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order replaces";
                };
                readonly asset_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "Asset ID (For options this represents the option contract ID)";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Asset symbol, required for all order classes except for `mleg`";
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly notional: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                };
                readonly qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                };
                readonly filled_qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Filled quantity";
                };
                readonly filled_avg_price: {
                    readonly type: "string";
                    readonly description: "Filled average price";
                };
                readonly order_class: {
                    readonly type: "string";
                    readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                    readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                    readonly title: "OrderClass";
                    readonly examples: readonly ["bracket"];
                };
                readonly order_type: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "Deprecated in favour of the field \"type\" ";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                    readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                    readonly title: "OrderType";
                    readonly examples: readonly ["market"];
                };
                readonly side: {
                    readonly type: "string";
                    readonly enum: readonly ["buy", "sell"];
                    readonly title: "OrderSide";
                    readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                    readonly examples: readonly ["buy"];
                };
                readonly time_in_force: {
                    readonly type: "string";
                    readonly title: "TimeInForce";
                    readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                    readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                    readonly examples: readonly ["day"];
                };
                readonly limit_price: {
                    readonly type: "string";
                    readonly description: "Limit price";
                };
                readonly stop_price: {
                    readonly description: "Stop price";
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly title: "OrderStatus";
                    readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                    readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                    readonly examples: readonly ["new"];
                };
                readonly extended_hours: {
                    readonly type: "boolean";
                    readonly description: "If true, eligible for execution outside regular trading hours.";
                };
                readonly legs: {
                    readonly type: "array";
                    readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                    readonly items: {
                        readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                        readonly type: "object";
                        readonly title: "Order";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Order ID";
                            };
                            readonly client_order_id: {
                                readonly type: "string";
                                readonly description: "Client unique order ID";
                                readonly maxLength: 128;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly submitted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly filled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expired_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly failed_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order was replaced by";
                            };
                            readonly replaces: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order replaces";
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID (For options this represents the option contract ID)";
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Asset symbol";
                            };
                            readonly asset_class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly notional: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                            };
                            readonly qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                            };
                            readonly filled_qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Filled quantity";
                            };
                            readonly filled_avg_price: {
                                readonly type: "string";
                                readonly description: "Filled average price";
                            };
                            readonly order_class: {
                                readonly type: "string";
                                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                readonly title: "OrderClass";
                                readonly examples: readonly ["bracket"];
                            };
                            readonly order_type: {
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Deprecated in favour of the field \"type\" ";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                readonly title: "OrderType";
                                readonly examples: readonly ["market"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly enum: readonly ["buy", "sell"];
                                readonly title: "OrderSide";
                                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                readonly examples: readonly ["buy"];
                            };
                            readonly time_in_force: {
                                readonly type: "string";
                                readonly title: "TimeInForce";
                                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                readonly examples: readonly ["day"];
                            };
                            readonly limit_price: {
                                readonly type: "string";
                                readonly description: "Limit price";
                            };
                            readonly stop_price: {
                                readonly description: "Stop price";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly title: "OrderStatus";
                                readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                readonly examples: readonly ["new"];
                            };
                            readonly extended_hours: {
                                readonly type: "boolean";
                                readonly description: "If true, eligible for execution outside regular trading hours.";
                            };
                            readonly legs: {
                                readonly type: "array";
                                readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                readonly items: {};
                            };
                            readonly trail_percent: {
                                readonly type: "string";
                                readonly description: "The percent value away from the high water mark for trailing stop orders.";
                            };
                            readonly trail_price: {
                                readonly type: "string";
                                readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                            };
                            readonly hwm: {
                                readonly type: "string";
                                readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                            };
                            readonly position_intent: {
                                readonly type: "string";
                                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                readonly title: "PositionIntent";
                                readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                readonly examples: readonly ["buy_to_open"];
                            };
                        };
                        readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                    };
                };
                readonly trail_percent: {
                    readonly type: "string";
                    readonly description: "The percent value away from the high water mark for trailing stop orders.";
                };
                readonly trail_price: {
                    readonly type: "string";
                    readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                };
                readonly hwm: {
                    readonly type: "string";
                    readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                };
                readonly position_intent: {
                    readonly type: "string";
                    readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                    readonly title: "PositionIntent";
                    readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                    readonly examples: readonly ["buy_to_open"];
                };
            };
            readonly required: readonly ["notional", "type", "time_in_force"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteOrderByOrderId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "order id";
                };
            };
            readonly required: readonly ["order_id"];
        }];
    };
};
declare const DeleteWatchlistById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly watchlist_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "watchlist id";
                };
            };
            readonly required: readonly ["watchlist_id"];
        }];
    };
};
declare const DeleteWatchlistByName: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "name of the watchlist";
                };
            };
            readonly required: readonly ["name"];
        }];
    };
};
declare const DeleteWhitelistedAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly whitelisted_address_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The whitelisted address to delete";
                };
            };
            readonly required: readonly ["whitelisted_address_id"];
        }];
    };
};
declare const GetAccount: {
    readonly response: {
        readonly "200": {
            readonly title: "Account";
            readonly type: "object";
            readonly description: "The account API serves important information related to an account, including account status, funds available for trade, funds available for withdrawal, and various flags relevant to an account’s ability to trade. An account maybe be blocked for just for trades (trades_blocked flag) or for both trades and transfers (account_blocked flag) if Alpaca identifies the account to engaging in any suspicious activity. Also, in accordance with FINRA’s pattern day trading rule, an account may be flagged for pattern day trading (pattern_day_trader flag), which would inhibit an account from placing any further day-trades. Please note that cryptocurrencies are not eligible assets to be used as collateral for margin accounts and will require the asset be traded using cash only.\n";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly account_blocked: false;
                    readonly account_number: "010203ABCD";
                    readonly buying_power: "262113.632";
                    readonly cash: "-23140.2";
                    readonly created_at: "2019-06-12T22:47:07.99658Z";
                    readonly currency: "USD";
                    readonly daytrade_count: 0;
                    readonly balance_asof: "2023-09-27";
                    readonly daytrading_buying_power: "262113.632";
                    readonly equity: "103820.56";
                    readonly id: "e6fe16f3-64a4-4921-8928-cadf02f92f98";
                    readonly initial_margin: "63480.38";
                    readonly last_equity: "103529.24";
                    readonly last_maintenance_margin: "38000.832";
                    readonly long_market_value: "126960.76";
                    readonly maintenance_margin: "38088.228";
                    readonly multiplier: "4";
                    readonly pattern_day_trader: false;
                    readonly portfolio_value: "103820.56";
                    readonly regt_buying_power: "80680.36";
                    readonly options_buying_power: "40340.18";
                    readonly short_market_value: "0";
                    readonly shorting_enabled: true;
                    readonly sma: "0";
                    readonly status: "ACTIVE";
                    readonly trade_suspended_by_user: false;
                    readonly trading_blocked: false;
                    readonly transfers_blocked: false;
                    readonly options_approved_level: 2;
                    readonly options_trading_level: 1;
                    readonly intraday_adjustments: "0";
                    readonly pending_reg_taf_fees: "0";
                };
            };
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Account Id.\n";
                    readonly format: "uuid";
                };
                readonly account_number: {
                    readonly type: "string";
                    readonly description: "Account number.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly title: "AccountStatus";
                    readonly enum: readonly ["ONBOARDING", "SUBMISSION_FAILED", "SUBMITTED", "ACCOUNT_UPDATED", "APPROVAL_PENDING", "ACTIVE", "REJECTED"];
                    readonly description: "An enum representing the various possible account status values.\n\nMost likely, the account status is ACTIVE unless there is any problem. The account status may get in ACCOUNT_UPDATED when personal information is being updated from the dashboard, in which case you may not be allowed trading for a short period of time until the change is approved.\n\n- ONBOARDING\n  The account is onboarding.\n- SUBMISSION_FAILED\n  The account application submission failed for some reason.\n- SUBMITTED\n  The account application has been submitted for review.\n- ACCOUNT_UPDATED\n  The account information is being updated.\n- APPROVAL_PENDING\n  The final account approval is pending.\n- ACTIVE\n  The account is active for trading.\n- REJECTED\n  The account application has been rejected.\n\n`ONBOARDING` `SUBMISSION_FAILED` `SUBMITTED` `ACCOUNT_UPDATED` `APPROVAL_PENDING` `ACTIVE` `REJECTED`";
                    readonly "x-examples": {
                        readonly "example-1": "ACTIVE";
                    };
                    readonly examples: readonly ["ACTIVE"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "USD\n";
                    readonly examples: readonly ["USD"];
                };
                readonly cash: {
                    readonly description: "Cash Balance\n";
                    readonly type: "string";
                };
                readonly portfolio_value: {
                    readonly description: "Total value of cash + holding positions (This field is deprecated. It is equivalent to the equity field.)";
                    readonly type: "string";
                };
                readonly non_marginable_buying_power: {
                    readonly description: "Current available non-margin dollar buying power";
                    readonly type: "string";
                    readonly "x-stoplight": {
                        readonly id: "z0ydzt6yqegll";
                    };
                };
                readonly accrued_fees: {
                    readonly description: "The fees collected.";
                    readonly type: "string";
                    readonly "x-stoplight": {
                        readonly id: "b1gospbwoz961";
                    };
                };
                readonly pending_transfer_in: {
                    readonly description: "Cash pending transfer in.";
                    readonly type: "string";
                    readonly "x-stoplight": {
                        readonly id: "83ckvzqu3jewp";
                    };
                };
                readonly pending_transfer_out: {
                    readonly description: "Cash pending transfer out.";
                    readonly type: "string";
                    readonly "x-stoplight": {
                        readonly id: "gkxijaueofvdg";
                    };
                };
                readonly pattern_day_trader: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the account has been flagged as a pattern day trader";
                };
                readonly trade_suspended_by_user: {
                    readonly type: "boolean";
                    readonly description: "User setting. If true, the account is not allowed to place orders.";
                };
                readonly trading_blocked: {
                    readonly type: "boolean";
                    readonly description: "If true, the account is not allowed to place orders.\n";
                };
                readonly transfers_blocked: {
                    readonly type: "boolean";
                    readonly description: "If true, the account is not allowed to request money transfers.";
                };
                readonly account_blocked: {
                    readonly type: "boolean";
                    readonly description: "If true, the account activity by user is prohibited.";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Timestamp this account was created at\n";
                    readonly format: "date-time";
                };
                readonly shorting_enabled: {
                    readonly type: "boolean";
                    readonly description: "Flag to denote whether or not the account is permitted to short";
                };
                readonly long_market_value: {
                    readonly description: "Real-time MtM value of all long positions held in the account\n";
                    readonly type: "string";
                };
                readonly short_market_value: {
                    readonly description: "Real-time MtM value of all short positions held in the account";
                    readonly type: "string";
                };
                readonly equity: {
                    readonly description: "Cash + long_market_value + short_market_value";
                    readonly type: "string";
                };
                readonly last_equity: {
                    readonly description: "Equity as of previous trading day at 16:00:00 ET";
                    readonly type: "string";
                };
                readonly multiplier: {
                    readonly description: "Buying power multiplier that represents account margin classification; valid values 1 (standard limited margin account with 1x buying power), 2 (reg T margin account with 2x intraday and overnight buying power; this is the default for all non-PDT accounts with $2,000 or more equity), 4 (PDT account with 4x intraday buying power and 2x reg T overnight buying power)";
                    readonly type: "string";
                };
                readonly buying_power: {
                    readonly description: "Current available $ buying power; If multiplier = 4, this is your daytrade buying power which is calculated as (last_equity - (last) maintenance_margin) * 4; If multiplier = 2, buying_power = max(equity – initial_margin,0) * 2; If multiplier = 1, buying_power = cash";
                    readonly type: "string";
                };
                readonly initial_margin: {
                    readonly description: "Reg T initial margin requirement (continuously updated value)";
                    readonly type: "string";
                };
                readonly maintenance_margin: {
                    readonly description: "Maintenance margin requirement (continuously updated value)";
                    readonly type: "string";
                };
                readonly sma: {
                    readonly type: "string";
                    readonly description: "Value of special memorandum account (will be used at a later date to provide additional buying_power)";
                };
                readonly daytrade_count: {
                    readonly type: "integer";
                    readonly description: "The current number of daytrades that have been made in the last 5 trading days (inclusive of today)";
                };
                readonly balance_asof: {
                    readonly type: "string";
                    readonly description: "The date of the snapshot for `last_*` fields";
                    readonly examples: readonly ["2021-04-01"];
                };
                readonly last_maintenance_margin: {
                    readonly description: "Your maintenance margin requirement on the previous trading day";
                    readonly type: "string";
                };
                readonly daytrading_buying_power: {
                    readonly description: "Your buying power for day trades (continuously updated value)";
                    readonly type: "string";
                };
                readonly regt_buying_power: {
                    readonly description: "Your buying power under Regulation T (your excess equity - equity minus margin value - times your margin multiplier)\n";
                    readonly type: "string";
                };
                readonly options_buying_power: {
                    readonly description: "Your buying power for options trading\n";
                    readonly type: "string";
                };
                readonly options_approved_level: {
                    readonly type: "integer";
                    readonly description: "The options trading level that was approved for this account.\n0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n\n\n`1` `2` `3`";
                    readonly enum: readonly [0, 1, 2, 3];
                    readonly examples: readonly [3];
                };
                readonly options_trading_level: {
                    readonly type: "integer";
                    readonly description: "The effective options trading level of the account.\nThis is the minimum between account options_approved_level and account configurations max_options_trading_level.\n0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n\n\n`1` `2` `3`";
                    readonly enum: readonly [0, 1, 2, 3];
                    readonly examples: readonly [3];
                };
                readonly intraday_adjustments: {
                    readonly type: "string";
                    readonly description: "The intraday adjustment by non_trade_activities such as fund deposit/withdraw.\n";
                    readonly examples: readonly ["0"];
                };
                readonly pending_reg_taf_fees: {
                    readonly type: "string";
                    readonly description: "Pending regulatory fees for the account.\n";
                };
            };
            readonly required: readonly ["id", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountActivities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly activity_types: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly title: "ActivityType";
                        readonly description: "- FILL\n  Order fills (both partial and full fills)\n\n- TRANS\n  Cash transactions (both CSD and CSW)\n\n- MISC\n  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)\n\n- ACATC\n  ACATS IN/OUT (Cash)\n\n- ACATS\n  ACATS IN/OUT (Securities)\n\n- CFEE\n  Crypto fee\n\n- CSD\n  Cash deposit(+)\n\n- CSW\n  Cash withdrawal(-)\n\n- DIV\n  Dividends\n\n- DIVCGL\n  Dividend (capital gain long term)\n\n- DIVCGS\n  Dividend (capital gain short term)\n\n- DIVFEE\n  Dividend fee\n\n- DIVFT\n  Dividend adjusted (Foreign Tax Withheld)\n\n- DIVNRA\n  Dividend adjusted (NRA Withheld)\n\n- DIVROC\n  Dividend return of capital\n\n- DIVTW\n  Dividend adjusted (Tefra Withheld)\n\n- DIVTXEX\n  Dividend (tax exempt)\n\n- FEE\n  Fee denominated in USD\n\n- INT\n  Interest (credit/margin)\n\n- INTNRA\n  Interest adjusted (NRA Withheld)\n\n- INTTW\n  Interest adjusted (Tefra Withheld)\n\n- JNL\n  Journal entry\n\n- JNLC\n  Journal entry (cash)\n\n- JNLS\n  Journal entry (stock)\n\n- MA\n  Merger/Acquisition\n\n- NC\n  Name change\n\n- OPASN\n  Option assignment\n\n- OPCA\n  Option corporate action\n\n- OPCSH\n  Option cash deliverable for non-standard contracts\n\n- OPEXC\n  Option exercise\n\n- OPEXP\n  Option expiration\n\n- OPTRD\n  Option trade\n\n- PTC\n  Pass Thru Charge\n\n- PTR\n  Pass Thru Rebate\n\n- REORG\n  Reorg CA\n\n- SPIN\n  Stock spinoff\n\n- SPLIT\n  Stock split";
                        readonly enum: readonly ["FILL", "TRANS", "MISC", "ACATC", "ACATS", "CFEE", "CSD", "CSW", "DIV", "DIVCGL", "DIVCGS", "DIVFEE", "DIVFT", "DIVNRA", "DIVROC", "DIVTW", "DIVTXEX", "FEE", "INT", "INTNRA", "INTTW", "JNL", "JNLC", "JNLS", "MA", "NC", "OPASN", "OPCA", "OPCSH", "OPEXC", "OPEXP", "OPTRD", "PTC", "PTR", "REORG", "SPIN", "SPLIT"];
                        readonly "x-examples": {
                            readonly "example-1": "FILL";
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma-separated list of activity types used to filter the results.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly enum: readonly ["trade_activity", "non_trade_activity"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The activity category. Cannot be used with \"activity_types\" parameter.";
                };
                readonly date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter activities by the activity date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.";
                };
                readonly until: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get activities created before this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.";
                };
                readonly after: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get activities created after this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly default: "desc";
                    readonly examples: readonly ["desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The chronological order of response based on the activity datetime.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum number of entries to return in the response.";
                };
                readonly page_token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token used for pagination. Provide the ID of the last activity from the last page to retrieve the next set of results.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly anyOf: readonly [{
                    readonly title: "AccountTradingActivities";
                    readonly type: "object";
                    readonly "x-examples": {
                        readonly "example-1": {
                            readonly id: "20220202135509981::2d7be4ff-d1f3-43e9-856a-0f5cf5c5088e";
                            readonly activity_type: "FILL";
                            readonly transaction_time: "2022-02-02T18:55:09.981482Z";
                            readonly type: "fill";
                            readonly price: "174.78";
                            readonly qty: "2";
                            readonly side: "buy";
                            readonly symbol: "AAPL";
                            readonly leaves_qty: "0";
                            readonly order_id: "b5abe576-6a8a-49f3-a353-46b72c1ccae9";
                            readonly cum_qty: "2";
                            readonly order_status: "filled";
                        };
                    };
                    readonly properties: {
                        readonly activity_type: {
                            readonly type: "string";
                            readonly title: "ActivityType";
                            readonly description: "- FILL\n  Order fills (both partial and full fills)\n\n- TRANS\n  Cash transactions (both CSD and CSW)\n\n- MISC\n  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)\n\n- ACATC\n  ACATS IN/OUT (Cash)\n\n- ACATS\n  ACATS IN/OUT (Securities)\n\n- CFEE\n  Crypto fee\n\n- CSD\n  Cash deposit(+)\n\n- CSW\n  Cash withdrawal(-)\n\n- DIV\n  Dividends\n\n- DIVCGL\n  Dividend (capital gain long term)\n\n- DIVCGS\n  Dividend (capital gain short term)\n\n- DIVFEE\n  Dividend fee\n\n- DIVFT\n  Dividend adjusted (Foreign Tax Withheld)\n\n- DIVNRA\n  Dividend adjusted (NRA Withheld)\n\n- DIVROC\n  Dividend return of capital\n\n- DIVTW\n  Dividend adjusted (Tefra Withheld)\n\n- DIVTXEX\n  Dividend (tax exempt)\n\n- FEE\n  Fee denominated in USD\n\n- INT\n  Interest (credit/margin)\n\n- INTNRA\n  Interest adjusted (NRA Withheld)\n\n- INTTW\n  Interest adjusted (Tefra Withheld)\n\n- JNL\n  Journal entry\n\n- JNLC\n  Journal entry (cash)\n\n- JNLS\n  Journal entry (stock)\n\n- MA\n  Merger/Acquisition\n\n- NC\n  Name change\n\n- OPASN\n  Option assignment\n\n- OPCA\n  Option corporate action\n\n- OPCSH\n  Option cash deliverable for non-standard contracts\n\n- OPEXC\n  Option exercise\n\n- OPEXP\n  Option expiration\n\n- OPTRD\n  Option trade\n\n- PTC\n  Pass Thru Charge\n\n- PTR\n  Pass Thru Rebate\n\n- REORG\n  Reorg CA\n\n- SPIN\n  Stock spinoff\n\n- SPLIT\n  Stock split\n\n`FILL` `TRANS` `MISC` `ACATC` `ACATS` `CFEE` `CSD` `CSW` `DIV` `DIVCGL` `DIVCGS` `DIVFEE` `DIVFT` `DIVNRA` `DIVROC` `DIVTW` `DIVTXEX` `FEE` `INT` `INTNRA` `INTTW` `JNL` `JNLC` `JNLS` `MA` `NC` `OPASN` `OPCA` `OPCSH` `OPEXC` `OPEXP` `OPTRD` `PTC` `PTR` `REORG` `SPIN` `SPLIT`";
                            readonly enum: readonly ["FILL", "TRANS", "MISC", "ACATC", "ACATS", "CFEE", "CSD", "CSW", "DIV", "DIVCGL", "DIVCGS", "DIVFEE", "DIVFT", "DIVNRA", "DIVROC", "DIVTW", "DIVTXEX", "FEE", "INT", "INTNRA", "INTTW", "JNL", "JNLC", "JNLS", "MA", "NC", "OPASN", "OPCA", "OPCSH", "OPEXC", "OPEXP", "OPTRD", "PTC", "PTR", "REORG", "SPIN", "SPLIT"];
                            readonly "x-examples": {
                                readonly "example-1": "FILL";
                            };
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "An id for the activity. Always in “::” format. Can be sent as page_token in requests to facilitate the paging of results.";
                        };
                        readonly cum_qty: {
                            readonly description: "The cumulative quantity of shares involved in the execution.";
                            readonly type: "string";
                        };
                        readonly leaves_qty: {
                            readonly type: "string";
                            readonly description: "For partially_filled orders, the quantity of shares that are left to be filled.\n";
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly description: "The per-share price that the trade was executed at.";
                        };
                        readonly qty: {
                            readonly type: "string";
                            readonly description: "The number of shares involved in the trade execution.";
                        };
                        readonly side: {
                            readonly type: "string";
                            readonly description: "buy or sell";
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly description: "The symbol of the security being traded.";
                            readonly examples: readonly ["AAPL"];
                        };
                        readonly transaction_time: {
                            readonly type: "string";
                            readonly description: "The time at which the execution occurred.";
                            readonly format: "date-time";
                        };
                        readonly order_id: {
                            readonly type: "string";
                            readonly description: "The id for the order that filled.";
                            readonly format: "uuid";
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "fill or partial_fill\n\n`fill` `partial_fill`";
                            readonly enum: readonly ["fill", "partial_fill"];
                            readonly examples: readonly ["fill"];
                        };
                        readonly order_status: {
                            readonly type: "string";
                            readonly title: "OrderStatus";
                            readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                            readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                            readonly examples: readonly ["new"];
                        };
                    };
                }, {
                    readonly title: "AccountNonTradeActivities";
                    readonly type: "object";
                    readonly properties: {
                        readonly activity_type: {
                            readonly type: "string";
                            readonly title: "ActivityType";
                            readonly description: "- FILL\n  Order fills (both partial and full fills)\n\n- TRANS\n  Cash transactions (both CSD and CSW)\n\n- MISC\n  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)\n\n- ACATC\n  ACATS IN/OUT (Cash)\n\n- ACATS\n  ACATS IN/OUT (Securities)\n\n- CFEE\n  Crypto fee\n\n- CSD\n  Cash deposit(+)\n\n- CSW\n  Cash withdrawal(-)\n\n- DIV\n  Dividends\n\n- DIVCGL\n  Dividend (capital gain long term)\n\n- DIVCGS\n  Dividend (capital gain short term)\n\n- DIVFEE\n  Dividend fee\n\n- DIVFT\n  Dividend adjusted (Foreign Tax Withheld)\n\n- DIVNRA\n  Dividend adjusted (NRA Withheld)\n\n- DIVROC\n  Dividend return of capital\n\n- DIVTW\n  Dividend adjusted (Tefra Withheld)\n\n- DIVTXEX\n  Dividend (tax exempt)\n\n- FEE\n  Fee denominated in USD\n\n- INT\n  Interest (credit/margin)\n\n- INTNRA\n  Interest adjusted (NRA Withheld)\n\n- INTTW\n  Interest adjusted (Tefra Withheld)\n\n- JNL\n  Journal entry\n\n- JNLC\n  Journal entry (cash)\n\n- JNLS\n  Journal entry (stock)\n\n- MA\n  Merger/Acquisition\n\n- NC\n  Name change\n\n- OPASN\n  Option assignment\n\n- OPCA\n  Option corporate action\n\n- OPCSH\n  Option cash deliverable for non-standard contracts\n\n- OPEXC\n  Option exercise\n\n- OPEXP\n  Option expiration\n\n- OPTRD\n  Option trade\n\n- PTC\n  Pass Thru Charge\n\n- PTR\n  Pass Thru Rebate\n\n- REORG\n  Reorg CA\n\n- SPIN\n  Stock spinoff\n\n- SPLIT\n  Stock split\n\n`FILL` `TRANS` `MISC` `ACATC` `ACATS` `CFEE` `CSD` `CSW` `DIV` `DIVCGL` `DIVCGS` `DIVFEE` `DIVFT` `DIVNRA` `DIVROC` `DIVTW` `DIVTXEX` `FEE` `INT` `INTNRA` `INTTW` `JNL` `JNLC` `JNLS` `MA` `NC` `OPASN` `OPCA` `OPCSH` `OPEXC` `OPEXP` `OPTRD` `PTC` `PTR` `REORG` `SPIN` `SPLIT`";
                            readonly enum: readonly ["FILL", "TRANS", "MISC", "ACATC", "ACATS", "CFEE", "CSD", "CSW", "DIV", "DIVCGL", "DIVCGS", "DIVFEE", "DIVFT", "DIVNRA", "DIVROC", "DIVTW", "DIVTXEX", "FEE", "INT", "INTNRA", "INTTW", "JNL", "JNLC", "JNLS", "MA", "NC", "OPASN", "OPCA", "OPCSH", "OPEXC", "OPEXP", "OPTRD", "PTC", "PTR", "REORG", "SPIN", "SPLIT"];
                            readonly "x-examples": {
                                readonly "example-1": "FILL";
                            };
                        };
                        readonly activity_sub_type: {
                            readonly title: "ActivitySubType";
                            readonly type: "string";
                            readonly description: "Represents a more specific classification to the `activity_type`.\nThis field is optional and may not always be populated, depending on the activity type and the available data.\nEach `activity_type` has a set of valid `activity_sub_type` values.\n\nFull mapping of `activity_type` to `activity_sub_type`:\n\n- **DIV**: Dividend activity sub-types:\n  - **CDIV**: Cash Dividend\n  - **SDIV**: Stock Dividend\n\n- **FEE**: Fee-related activity sub-types:\n  - **REG**: Regulatory Fee\n  - **TAF**: Trading Activity Fee\n  - **LCT**: Local Currency Trading Fee\n  - **ORF**: Options Regulatory Fee\n  - **OCC**: Options Clearing Corporation Fee\n  - **NRC**: Non-Retail Commission Fee\n  - **NRV**: Non-Retail Venue Fee\n  - **COM**: Commission\n  - **CAT**: Consolidated Audit Trail Fee\n\n- **INT**: Interest-related activity sub-types:\n  - **MGN**: Margin Interest\n  - **CDT**: Credit Interest\n  - **SWP**: Sweep Interest\n  - **QII**: Qualified Interest\n\n- **MA**: Merger and Acquisition activity sub-types:\n  - **CMA**: Cash Merger\n  - **SMA**: Stock Merger\n  - **SCMA**: Stock & Cash Merger\n\n- **NC**: Name Change activity sub types\n  - **SNC**: Symbol Name Change\n  - **CNC**: CUSIP Name Change\n  - **SCNC**: Symbol & CUSIP Name Change\n\n- **OPCA**: Option Corporate Action activity sub-types:\n  - **DIV.CDIV**: Cash Dividend\n  - **DIV.SDIV**: Stock Dividend\n  - **MA.CMA**: Cash Merger\n  - **MA.SMA**: Stock Merger\n  - **MA.SCMA**: Stock & Cash Merger\n  - **NC.CNC**: CUSIP Name Change\n  - **NC.SNC**: Symbol Name Change\n  - **NC.SCNC**: Symbol & CUSIP Name Change\n  - **SPIN**: Spin-off\n  - **SPLIT.FSPLIT**: Forward Stock Split\n  - **SPLIT.RSPLIT**: Reverse Stock Split\n  - **SPLIT.USPLIT**: Unit Split\n\n- **REORG**: Reorganization activity sub-types:\n  - **WRM**: Worthless Removal\n\n- **SPLIT**: Stock Split activity sub-types:\n  - **FSPLIT**: Forward Stock Split\n  - **RSPLIT**: Reverse Stock Split\n  - **USPLIT**: Unit Split\n\n- **VOF**: Voluntary Offering activity sub-types:\n  - **VTND**: Tender Offer\n  - **VWRT**: Warrant Exercise\n  - **VRGT**: Rights Offer\n  - **VEXH**: Exchange Offer\n\n- **WH**: Withholding activity sub-types:\n  - **SWH**: State Withholding\n  - **FWH**: Federal Withholding\n  - **SLWH**: Sales Withholding";
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "An ID for the activity, always in “::” format. Can be sent as page_token in requests to facilitate the paging of results.";
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "The date on which the activity occurred or on which the transaction associated with the activity settled.";
                            readonly format: "date-time";
                        };
                        readonly net_amount: {
                            readonly type: "string";
                            readonly description: "The net amount of money (positive or negative) associated with the activity.";
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly description: "The symbol of the security involved with the activity. Not present for all activity types.";
                        };
                        readonly cusip: {
                            readonly type: "string";
                            readonly description: "The CUSIP of the security involved with the activity. Not present for all activity types.";
                        };
                        readonly qty: {
                            readonly type: "string";
                            readonly description: "For dividend activities, the number of shares that contributed to the payment. Not present for other activity types.\n";
                        };
                        readonly per_share_amount: {
                            readonly type: "string";
                            readonly description: "For dividend activities, the average amount paid per share. Not present for other activity types.";
                        };
                        readonly group_id: {
                            readonly type: "string";
                            readonly description: "ID used to link activities who share a sibling relationship.";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The activity status.\n\n`executed` `correct` `canceled`";
                            readonly enum: readonly ["executed", "correct", "canceled"];
                        };
                    };
                    readonly "x-examples": {
                        readonly "example-1": {
                            readonly activity_type: "DIV";
                            readonly activity_sub_type: "SDIV";
                            readonly id: "20190801011955195::5f596936-6f23-4cef-bdf1-3806aae57dbf";
                            readonly date: "2019-08-01";
                            readonly net_amount: "1.02";
                            readonly symbol: "T";
                            readonly qty: "2";
                            readonly per_share_amount: "0.51";
                            readonly status: "executed";
                        };
                    };
                }];
                readonly description: "Will be a mix of TradingActivity or NonTradeActivity objects based on what is passed in the activity_types parameter";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountActivitiesByActivityType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly activity_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The activity type you want to view entries for. A list of valid activity types can be found at the bottom of this page.";
                };
            };
            readonly required: readonly ["activity_type"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter activities by the activity date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.";
                };
                readonly until: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get activities created before this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.";
                };
                readonly after: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get activities created after this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly default: "desc";
                    readonly examples: readonly ["desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The chronological order of response based on the activity datetime.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum number of entries to return in the response.";
                };
                readonly page_token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token used for pagination. Provide the ID of the last activity from the last page to retrieve the next set of results.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly title: "AccountTradingActivities";
                    readonly type: "object";
                    readonly "x-examples": {
                        readonly "example-1": {
                            readonly id: "20220202135509981::2d7be4ff-d1f3-43e9-856a-0f5cf5c5088e";
                            readonly activity_type: "FILL";
                            readonly transaction_time: "2022-02-02T18:55:09.981482Z";
                            readonly type: "fill";
                            readonly price: "174.78";
                            readonly qty: "2";
                            readonly side: "buy";
                            readonly symbol: "AAPL";
                            readonly leaves_qty: "0";
                            readonly order_id: "b5abe576-6a8a-49f3-a353-46b72c1ccae9";
                            readonly cum_qty: "2";
                            readonly order_status: "filled";
                        };
                    };
                    readonly properties: {
                        readonly activity_type: {
                            readonly type: "string";
                            readonly title: "ActivityType";
                            readonly description: "- FILL\n  Order fills (both partial and full fills)\n\n- TRANS\n  Cash transactions (both CSD and CSW)\n\n- MISC\n  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)\n\n- ACATC\n  ACATS IN/OUT (Cash)\n\n- ACATS\n  ACATS IN/OUT (Securities)\n\n- CFEE\n  Crypto fee\n\n- CSD\n  Cash deposit(+)\n\n- CSW\n  Cash withdrawal(-)\n\n- DIV\n  Dividends\n\n- DIVCGL\n  Dividend (capital gain long term)\n\n- DIVCGS\n  Dividend (capital gain short term)\n\n- DIVFEE\n  Dividend fee\n\n- DIVFT\n  Dividend adjusted (Foreign Tax Withheld)\n\n- DIVNRA\n  Dividend adjusted (NRA Withheld)\n\n- DIVROC\n  Dividend return of capital\n\n- DIVTW\n  Dividend adjusted (Tefra Withheld)\n\n- DIVTXEX\n  Dividend (tax exempt)\n\n- FEE\n  Fee denominated in USD\n\n- INT\n  Interest (credit/margin)\n\n- INTNRA\n  Interest adjusted (NRA Withheld)\n\n- INTTW\n  Interest adjusted (Tefra Withheld)\n\n- JNL\n  Journal entry\n\n- JNLC\n  Journal entry (cash)\n\n- JNLS\n  Journal entry (stock)\n\n- MA\n  Merger/Acquisition\n\n- NC\n  Name change\n\n- OPASN\n  Option assignment\n\n- OPCA\n  Option corporate action\n\n- OPCSH\n  Option cash deliverable for non-standard contracts\n\n- OPEXC\n  Option exercise\n\n- OPEXP\n  Option expiration\n\n- OPTRD\n  Option trade\n\n- PTC\n  Pass Thru Charge\n\n- PTR\n  Pass Thru Rebate\n\n- REORG\n  Reorg CA\n\n- SPIN\n  Stock spinoff\n\n- SPLIT\n  Stock split\n\n`FILL` `TRANS` `MISC` `ACATC` `ACATS` `CFEE` `CSD` `CSW` `DIV` `DIVCGL` `DIVCGS` `DIVFEE` `DIVFT` `DIVNRA` `DIVROC` `DIVTW` `DIVTXEX` `FEE` `INT` `INTNRA` `INTTW` `JNL` `JNLC` `JNLS` `MA` `NC` `OPASN` `OPCA` `OPCSH` `OPEXC` `OPEXP` `OPTRD` `PTC` `PTR` `REORG` `SPIN` `SPLIT`";
                            readonly enum: readonly ["FILL", "TRANS", "MISC", "ACATC", "ACATS", "CFEE", "CSD", "CSW", "DIV", "DIVCGL", "DIVCGS", "DIVFEE", "DIVFT", "DIVNRA", "DIVROC", "DIVTW", "DIVTXEX", "FEE", "INT", "INTNRA", "INTTW", "JNL", "JNLC", "JNLS", "MA", "NC", "OPASN", "OPCA", "OPCSH", "OPEXC", "OPEXP", "OPTRD", "PTC", "PTR", "REORG", "SPIN", "SPLIT"];
                            readonly "x-examples": {
                                readonly "example-1": "FILL";
                            };
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "An id for the activity. Always in “::” format. Can be sent as page_token in requests to facilitate the paging of results.";
                        };
                        readonly cum_qty: {
                            readonly description: "The cumulative quantity of shares involved in the execution.";
                            readonly type: "string";
                        };
                        readonly leaves_qty: {
                            readonly type: "string";
                            readonly description: "For partially_filled orders, the quantity of shares that are left to be filled.\n";
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly description: "The per-share price that the trade was executed at.";
                        };
                        readonly qty: {
                            readonly type: "string";
                            readonly description: "The number of shares involved in the trade execution.";
                        };
                        readonly side: {
                            readonly type: "string";
                            readonly description: "buy or sell";
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly description: "The symbol of the security being traded.";
                            readonly examples: readonly ["AAPL"];
                        };
                        readonly transaction_time: {
                            readonly type: "string";
                            readonly description: "The time at which the execution occurred.";
                            readonly format: "date-time";
                        };
                        readonly order_id: {
                            readonly type: "string";
                            readonly description: "The id for the order that filled.";
                            readonly format: "uuid";
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "fill or partial_fill\n\n`fill` `partial_fill`";
                            readonly enum: readonly ["fill", "partial_fill"];
                            readonly examples: readonly ["fill"];
                        };
                        readonly order_status: {
                            readonly type: "string";
                            readonly title: "OrderStatus";
                            readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                            readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                            readonly examples: readonly ["new"];
                        };
                    };
                }, {
                    readonly title: "AccountNonTradeActivities";
                    readonly type: "object";
                    readonly properties: {
                        readonly activity_type: {
                            readonly type: "string";
                            readonly title: "ActivityType";
                            readonly description: "- FILL\n  Order fills (both partial and full fills)\n\n- TRANS\n  Cash transactions (both CSD and CSW)\n\n- MISC\n  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)\n\n- ACATC\n  ACATS IN/OUT (Cash)\n\n- ACATS\n  ACATS IN/OUT (Securities)\n\n- CFEE\n  Crypto fee\n\n- CSD\n  Cash deposit(+)\n\n- CSW\n  Cash withdrawal(-)\n\n- DIV\n  Dividends\n\n- DIVCGL\n  Dividend (capital gain long term)\n\n- DIVCGS\n  Dividend (capital gain short term)\n\n- DIVFEE\n  Dividend fee\n\n- DIVFT\n  Dividend adjusted (Foreign Tax Withheld)\n\n- DIVNRA\n  Dividend adjusted (NRA Withheld)\n\n- DIVROC\n  Dividend return of capital\n\n- DIVTW\n  Dividend adjusted (Tefra Withheld)\n\n- DIVTXEX\n  Dividend (tax exempt)\n\n- FEE\n  Fee denominated in USD\n\n- INT\n  Interest (credit/margin)\n\n- INTNRA\n  Interest adjusted (NRA Withheld)\n\n- INTTW\n  Interest adjusted (Tefra Withheld)\n\n- JNL\n  Journal entry\n\n- JNLC\n  Journal entry (cash)\n\n- JNLS\n  Journal entry (stock)\n\n- MA\n  Merger/Acquisition\n\n- NC\n  Name change\n\n- OPASN\n  Option assignment\n\n- OPCA\n  Option corporate action\n\n- OPCSH\n  Option cash deliverable for non-standard contracts\n\n- OPEXC\n  Option exercise\n\n- OPEXP\n  Option expiration\n\n- OPTRD\n  Option trade\n\n- PTC\n  Pass Thru Charge\n\n- PTR\n  Pass Thru Rebate\n\n- REORG\n  Reorg CA\n\n- SPIN\n  Stock spinoff\n\n- SPLIT\n  Stock split\n\n`FILL` `TRANS` `MISC` `ACATC` `ACATS` `CFEE` `CSD` `CSW` `DIV` `DIVCGL` `DIVCGS` `DIVFEE` `DIVFT` `DIVNRA` `DIVROC` `DIVTW` `DIVTXEX` `FEE` `INT` `INTNRA` `INTTW` `JNL` `JNLC` `JNLS` `MA` `NC` `OPASN` `OPCA` `OPCSH` `OPEXC` `OPEXP` `OPTRD` `PTC` `PTR` `REORG` `SPIN` `SPLIT`";
                            readonly enum: readonly ["FILL", "TRANS", "MISC", "ACATC", "ACATS", "CFEE", "CSD", "CSW", "DIV", "DIVCGL", "DIVCGS", "DIVFEE", "DIVFT", "DIVNRA", "DIVROC", "DIVTW", "DIVTXEX", "FEE", "INT", "INTNRA", "INTTW", "JNL", "JNLC", "JNLS", "MA", "NC", "OPASN", "OPCA", "OPCSH", "OPEXC", "OPEXP", "OPTRD", "PTC", "PTR", "REORG", "SPIN", "SPLIT"];
                            readonly "x-examples": {
                                readonly "example-1": "FILL";
                            };
                        };
                        readonly activity_sub_type: {
                            readonly title: "ActivitySubType";
                            readonly type: "string";
                            readonly description: "Represents a more specific classification to the `activity_type`.\nThis field is optional and may not always be populated, depending on the activity type and the available data.\nEach `activity_type` has a set of valid `activity_sub_type` values.\n\nFull mapping of `activity_type` to `activity_sub_type`:\n\n- **DIV**: Dividend activity sub-types:\n  - **CDIV**: Cash Dividend\n  - **SDIV**: Stock Dividend\n\n- **FEE**: Fee-related activity sub-types:\n  - **REG**: Regulatory Fee\n  - **TAF**: Trading Activity Fee\n  - **LCT**: Local Currency Trading Fee\n  - **ORF**: Options Regulatory Fee\n  - **OCC**: Options Clearing Corporation Fee\n  - **NRC**: Non-Retail Commission Fee\n  - **NRV**: Non-Retail Venue Fee\n  - **COM**: Commission\n  - **CAT**: Consolidated Audit Trail Fee\n\n- **INT**: Interest-related activity sub-types:\n  - **MGN**: Margin Interest\n  - **CDT**: Credit Interest\n  - **SWP**: Sweep Interest\n  - **QII**: Qualified Interest\n\n- **MA**: Merger and Acquisition activity sub-types:\n  - **CMA**: Cash Merger\n  - **SMA**: Stock Merger\n  - **SCMA**: Stock & Cash Merger\n\n- **NC**: Name Change activity sub types\n  - **SNC**: Symbol Name Change\n  - **CNC**: CUSIP Name Change\n  - **SCNC**: Symbol & CUSIP Name Change\n\n- **OPCA**: Option Corporate Action activity sub-types:\n  - **DIV.CDIV**: Cash Dividend\n  - **DIV.SDIV**: Stock Dividend\n  - **MA.CMA**: Cash Merger\n  - **MA.SMA**: Stock Merger\n  - **MA.SCMA**: Stock & Cash Merger\n  - **NC.CNC**: CUSIP Name Change\n  - **NC.SNC**: Symbol Name Change\n  - **NC.SCNC**: Symbol & CUSIP Name Change\n  - **SPIN**: Spin-off\n  - **SPLIT.FSPLIT**: Forward Stock Split\n  - **SPLIT.RSPLIT**: Reverse Stock Split\n  - **SPLIT.USPLIT**: Unit Split\n\n- **REORG**: Reorganization activity sub-types:\n  - **WRM**: Worthless Removal\n\n- **SPLIT**: Stock Split activity sub-types:\n  - **FSPLIT**: Forward Stock Split\n  - **RSPLIT**: Reverse Stock Split\n  - **USPLIT**: Unit Split\n\n- **VOF**: Voluntary Offering activity sub-types:\n  - **VTND**: Tender Offer\n  - **VWRT**: Warrant Exercise\n  - **VRGT**: Rights Offer\n  - **VEXH**: Exchange Offer\n\n- **WH**: Withholding activity sub-types:\n  - **SWH**: State Withholding\n  - **FWH**: Federal Withholding\n  - **SLWH**: Sales Withholding";
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "An ID for the activity, always in “::” format. Can be sent as page_token in requests to facilitate the paging of results.";
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "The date on which the activity occurred or on which the transaction associated with the activity settled.";
                            readonly format: "date-time";
                        };
                        readonly net_amount: {
                            readonly type: "string";
                            readonly description: "The net amount of money (positive or negative) associated with the activity.";
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly description: "The symbol of the security involved with the activity. Not present for all activity types.";
                        };
                        readonly cusip: {
                            readonly type: "string";
                            readonly description: "The CUSIP of the security involved with the activity. Not present for all activity types.";
                        };
                        readonly qty: {
                            readonly type: "string";
                            readonly description: "For dividend activities, the number of shares that contributed to the payment. Not present for other activity types.\n";
                        };
                        readonly per_share_amount: {
                            readonly type: "string";
                            readonly description: "For dividend activities, the average amount paid per share. Not present for other activity types.";
                        };
                        readonly group_id: {
                            readonly type: "string";
                            readonly description: "ID used to link activities who share a sibling relationship.";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The activity status.\n\n`executed` `correct` `canceled`";
                            readonly enum: readonly ["executed", "correct", "canceled"];
                        };
                    };
                    readonly "x-examples": {
                        readonly "example-1": {
                            readonly activity_type: "DIV";
                            readonly activity_sub_type: "SDIV";
                            readonly id: "20190801011955195::5f596936-6f23-4cef-bdf1-3806aae57dbf";
                            readonly date: "2019-08-01";
                            readonly net_amount: "1.02";
                            readonly symbol: "T";
                            readonly qty: "2";
                            readonly per_share_amount: "0.51";
                            readonly status: "executed";
                        };
                    };
                }];
                readonly description: "Will be one of a TradingActivity or NonTradeActivity based on activity_type used in path";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountConfig: {
    readonly response: {
        readonly "200": {
            readonly title: "AccountConfigurations";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly dtbp_check: "entry";
                    readonly trade_confirm_email: "all";
                    readonly suspend_trade: false;
                    readonly no_shorting: false;
                    readonly fractional_trading: true;
                    readonly max_margin_multiplier: "4";
                    readonly pdt_check: "entry";
                };
            };
            readonly description: "The account configuration API provides custom configurations about your trading account settings. These configurations control various allow you to modify settings to suit your trading needs.";
            readonly properties: {
                readonly dtbp_check: {
                    readonly type: "string";
                    readonly description: "both, entry, or exit. Controls Day Trading Margin Call (DTMC) checks.\n\n`both` `entry` `exit`";
                    readonly enum: readonly ["both", "entry", "exit"];
                };
                readonly trade_confirm_email: {
                    readonly type: "string";
                    readonly description: "all or none. If none, emails for order fills are not sent.";
                };
                readonly suspend_trade: {
                    readonly type: "boolean";
                    readonly description: "If true, new orders are blocked.";
                };
                readonly no_shorting: {
                    readonly type: "boolean";
                    readonly description: "If true, account becomes long-only mode.";
                };
                readonly fractional_trading: {
                    readonly type: "boolean";
                    readonly description: "If true, account is able to participate in fractional trading";
                };
                readonly max_margin_multiplier: {
                    readonly type: "string";
                    readonly description: "Can be \"1\", \"2\", or \"4\"";
                };
                readonly max_options_trading_level: {
                    readonly type: "integer";
                    readonly description: "The desired maximum options trading level. 0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n\n`1` `2` `3`";
                    readonly enum: readonly [0, 1, 2, 3];
                };
                readonly pdt_check: {
                    readonly type: "string";
                    readonly description: "`both`, `entry`, or `exit`. If entry orders will be rejected on entering a position if it could result in PDT being set for the account. exit will reject exiting orders if they would result in PDT being set.";
                    readonly examples: readonly ["entry"];
                };
                readonly ptp_no_exception_entry: {
                    readonly type: "boolean";
                    readonly "x-stoplight": {
                        readonly id: "8qvrtnzouzp80";
                    };
                    readonly description: "If set to true then Alpaca will accept orders for PTP symbols with no exception. Default is false.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountPortfolioHistory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly period: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The duration of the data in `number` + `unit` format, such as 1D, where `unit` can be D for day, W for week, M for month and A for year. Defaults to 1M.\n\nOnly two of `start`, `end` (or `date_end`) and `period` can be specified at the same time.\n\nFor intraday timeframes (\\<1D) only 30 days or less can be queried, for 1D resolutions there is no such limit, data is available since the\ncreation of the account.\n";
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of time window. 1Min, 5Min, 15Min, 1H, or 1D. If omitted, 1Min for less than 7 days period,\n15Min for less than 30 days, or otherwise 1D.\n\nFor queries with longer than 30 days of `period`, the system only accepts 1D as `timeframe`.\n";
                };
                readonly intraday_reporting: {
                    readonly type: "string";
                    readonly enum: readonly ["market_hours", "extended_hours", "continuous"];
                    readonly default: "market_hours";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "For intraday resolutions (<1D) this specfies which timestamps to return data points for:\n\nAllowed values are:\n- **market_hours**\n\n  Only timestamps for the core requity trading hours are returned (usually 9:30am to 4:00pm, trading days only)\n\n- **extended_hours**\n\n  Returns timestamps for the whole session including extended hours (usually 4:00am to 8:00pm, trading days only)\n\n- **continuous**\n\n  Returns price data points 24/7 (for off-session times too). To calculate the equity values we are using the following prices:\n\n  Between 4:00am and 10:00pm on trading days the valuation will be calculated based on the last trade (extended hours and normal hours respectively).\n\n  After 10:00pm, until the next session open the equities will be valued at their official closing price on the primary exchange.\n";
                };
                readonly start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-03-16T18:38:01Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The timestamp the data is returned starting from in RFC3339 format (including timezone specification).\n\nFor `timeframes` less than 1D, the actual start will be determined based on the value of the `intraday_reporting` query parameter:\n\nFor example if the `intraday_reporting` is `extended_hours`, and the timestamp specified is `2023-10-19T03:30:00-04:00`, then the first\ndata point returned will be `2023-10-19T04:00:00-04:00` due to the session opening at that time.\n\n`start`, `end` (or `date_end`) and `period` cannot be specified at the same time.\n\nIf unset, the `period` will be used to calculate the starting time.\n";
                };
                readonly pnl_reset: {
                    readonly type: "string";
                    readonly enum: readonly ["no_reset", "per_day"];
                    readonly default: "per_day";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "`pnl_reset` defines how we are calculating the baseline values for Profit And Loss (pnl) for queries with `timeframe` less than 1D (intraday queries).\n\nThe default behavior for intraday queries is that we reset the pnl value to the previous day's closing equity for each **trading** day.\n\nIn case of crypto (given it's continous nature), this might not be desired: specifying \"no_reset\" disables this behavior and all pnl values\nreturned will be relative to the closing equity of the previous trading day.\n\nFor 1D resolution all PnL values are calculated relative to the `base_value`, we are not reseting the base value.\n";
                };
                readonly end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-03-16T18:38:01Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The timestamp the data is returned up to in RFC3339 format (including timezone specification).\n\nFor `timeframes` less than 1D, the actual start will be determined based on the value of the `intraday_reporting` query parameter:\n\nFor example if the `intraday_reporting` is `extended_hours`, and the timestamp specified is `2023-10-19T21:33:00-04:00`, then the last\ndata point returned will be `2023-10-19T20:00:00-04:00` due to the session closing at that time.\n\n`start`, `end` (or `date_end`) and `period` cannot be specified at the same time.\n\nIf unset, the current time is considered the `end`'s default value.\n";
                };
                readonly date_end: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2022-05-15"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "**deprecated**: please use the end query parameter instead for **better control of the time zone**.\n\nThe date the data is returned up to, in “YYYY-MM-DD” format. Defaults to the current market date (rolls over at the market open if\n`extended_hours` is false, otherwise at 7am ET)\n\nIn continous mode, the returned data is starting from midnight the given day in ET.\n";
                };
                readonly extended_hours: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "**deprecated**: Users are strongly advised to **rely on the `intraday_reporting` query parameter** for better control\nof the reporting range.\n\nIf true, include extended hours in the result. This is effective only for timeframe less than 1D.\n";
                };
                readonly cashflow_types: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The cashflow activities to include in the report. One of 'ALL', 'NONE', or a comma-separated list of activity types.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "PortfolioHistory";
            readonly description: "Timeseries data for equity and profit loss information of the account.";
            readonly type: "object";
            readonly properties: {
                readonly timestamp: {
                    readonly type: "array";
                    readonly description: "Time of each data element, left-labeled (the beginning of time window).\n\nThe values returned are in [UNIX epoch format](https://en.wikipedia.org/wiki/Unix_time).\n";
                    readonly items: {
                        readonly type: "integer";
                    };
                };
                readonly equity: {
                    readonly type: "array";
                    readonly description: "equity value of the account in dollar amount as of the end of each time window";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly profit_loss: {
                    readonly type: "array";
                    readonly description: "profit/loss in dollar from the base value";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly profit_loss_pct: {
                    readonly type: "array";
                    readonly description: "profit/loss in percentage from the base value";
                    readonly items: {
                        readonly type: "number";
                    };
                    readonly examples: readonly [0.001, 0.002];
                };
                readonly base_value: {
                    readonly type: "number";
                    readonly description: "basis in dollar of the profit loss calculation";
                };
                readonly base_value_asof: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "If included, then it indicates that the base_value is the account's closing\nequity value at this trading date.\n\nIf not specified, then the baseline calculation is done against the earliest returned data item. This could happen for\naccounts without prior closing balances (e.g. new account) or for queries with 1D timeframes, where the first data point\nis used as a reference point.\n";
                    readonly examples: readonly ["2023-10-20"];
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly description: "time window size of each data element";
                    readonly examples: readonly ["15Min"];
                };
                readonly cashflow: {
                    readonly type: "object";
                    readonly description: "accumulated value in dollar amount as of the end of each time window";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["timestamp", "equity", "profit_loss", "profit_loss_pct", "base_value", "timeframe"];
            readonly "x-examples": {
                readonly "example-intraday-query-15min-1d": {
                    readonly timestamp: readonly [1697722200, 1697723100, 1697724000, 1697724900, 1697725800, 1697726700, 1697727600, 1697728500, 1697729400, 1697730300, 1697731200, 1697732100, 1697733000, 1697733900, 1697734800, 1697735700, 1697736600, 1697737500, 1697738400, 1697739300, 1697740200, 1697741100, 1697742000, 1697742900, 1697743800, 1697744700, 1697745600];
                    readonly equity: readonly [2773.79, 2769.04, 2768.65, 2765.11, 2763.03, 2763.17, 2763.17, 2763.47, 2763.91, 2768.13, 2774.98, 2757.94, 2757.65, 2774.54, 2775.58, 2775.28, 2767.9, 2762.26, 2762.56, 2756.99, 2756.84, 2752.43, 2752.13, 2748.44, 2751.23, 2747.54, 2748.74];
                    readonly profit_loss: readonly [-0.37, -5.12, -5.51, -9.05, -11.13, -10.99, -10.99, -10.69, -10.25, -6.03, 0.82, -16.22, -16.51, 0.38, 1.42, 1.12, -6.26, -11.9, -11.6, -17.17, -17.32, -21.73, -22.03, -25.72, -22.93, -26.62, -25.42];
                    readonly profit_loss_pct: readonly [-0.0001, -0.0018, -0.002, -0.0033, -0.004, -0.004, -0.004, -0.0039, -0.0037, -0.0022, 0.0003, -0.0058, -0.006, 0.0001, 0.0005, 0.0004, -0.0023, -0.0043, -0.0042, -0.0062, -0.0062, -0.0078, -0.0079, -0.0093, -0.0083, -0.0096, -0.0092];
                    readonly base_value: 2774.16;
                    readonly base_value_asof: "2023-10-18";
                    readonly timeframe: "15Min";
                };
                readonly "example-query-1d-7d": {
                    readonly timestamp: readonly [1697241600, 1697500800, 1697587200, 1697673600, 1697760000];
                    readonly equity: readonly [2784.79, 2794.79, 2805.46, 2774.16, 2748.73];
                    readonly profit_loss: readonly [0, 10.0022, 10.6692, -31.2996, -25.4232];
                    readonly profit_loss_pct: readonly [0, 0.0035, 0.0074, -0.0038, -0.0129];
                    readonly base_value: 2784.79;
                    readonly timeframe: "1D";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllOpenPositions: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly description: "The positions API provides information about an account’s current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API.";
                readonly type: "object";
                readonly "x-examples": {
                    readonly "example-1": {
                        readonly asset_id: "904837e3-3b76-47ec-b432-046db621571b";
                        readonly symbol: "AAPL";
                        readonly exchange: "NASDAQ";
                        readonly asset_class: "us_equity";
                        readonly avg_entry_price: "100.0";
                        readonly qty: "5";
                        readonly qty_available: "4";
                        readonly side: "long";
                        readonly market_value: "600.0";
                        readonly cost_basis: "500.0";
                        readonly unrealized_pl: "100.0";
                        readonly unrealized_plpc: "0.20";
                        readonly unrealized_intraday_pl: "10.0";
                        readonly unrealized_intraday_plpc: "0.0084";
                        readonly current_price: "120.0";
                        readonly lastday_price: "119.0";
                        readonly change_today: "0.0084";
                    };
                    readonly "example-2": {
                        readonly asset_id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                        readonly symbol: "AAPL";
                        readonly exchange: "NASDAQ";
                        readonly asset_class: "us_equity";
                        readonly asset_marginable: false;
                        readonly qty: "2";
                        readonly qty_available: "2";
                        readonly avg_entry_price: "174.78";
                        readonly side: "long";
                        readonly market_value: "348.58";
                        readonly cost_basis: "349.56";
                        readonly unrealized_pl: "-0.98";
                        readonly unrealized_plpc: "-0.0028035244307129";
                        readonly unrealized_intraday_pl: "-0.98";
                        readonly unrealized_intraday_plpc: "-0.0028035244307129";
                        readonly current_price: "174.29";
                        readonly lastday_price: "174.61";
                        readonly change_today: "-0.0018326556325525";
                    };
                };
                readonly title: "Position";
                readonly properties: {
                    readonly asset_id: {
                        readonly type: "string";
                        readonly description: "Asset ID (For options this represents the option contract ID)";
                        readonly format: "uuid";
                    };
                    readonly symbol: {
                        readonly type: "string";
                        readonly description: "Symbol name of the asset";
                        readonly examples: readonly ["AAPL"];
                    };
                    readonly exchange: {
                        readonly title: "Exchange";
                        readonly type: "string";
                        readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                        readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                        readonly examples: readonly ["NYSE"];
                    };
                    readonly asset_class: {
                        readonly type: "string";
                        readonly title: "AssetClass";
                        readonly enum: readonly ["us_equity", "us_option", "crypto"];
                        readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                        readonly "x-examples": {
                            readonly "example-1": "us_equity";
                        };
                        readonly examples: readonly ["us_equity"];
                    };
                    readonly avg_entry_price: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Average entry price of the position";
                    };
                    readonly qty: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "The number of shares";
                    };
                    readonly qty_available: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Total number of shares available minus open orders / locked for options covered call";
                    };
                    readonly side: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "“long”";
                    };
                    readonly market_value: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Total dollar amount of the position";
                    };
                    readonly cost_basis: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Total cost basis in dollar";
                    };
                    readonly unrealized_pl: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Unrealized profit/loss in dollars";
                    };
                    readonly unrealized_plpc: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Unrealized profit/loss percent (by a factor of 1)";
                    };
                    readonly unrealized_intraday_pl: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Unrealized profit/loss in dollars for the day";
                    };
                    readonly unrealized_intraday_plpc: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Unrealized profit/loss percent (by a factor of 1)";
                    };
                    readonly current_price: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Current asset price per share";
                    };
                    readonly lastday_price: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Last day’s asset price per share based on the closing value of the last trading day";
                    };
                    readonly change_today: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Percent change from last day price (by a factor of 1)";
                    };
                    readonly asset_marginable: {
                        readonly type: "boolean";
                    };
                };
                readonly required: readonly ["asset_id", "symbol", "exchange", "asset_class", "avg_entry_price", "qty", "side", "market_value", "cost_basis", "unrealized_pl", "unrealized_plpc", "unrealized_intraday_pl", "unrealized_intraday_plpc", "current_price", "lastday_price", "change_today", "asset_marginable"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllOrders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["open", "closed", "all"];
                    readonly examples: readonly ["open"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order status to be queried. open, closed or all. Defaults to open.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum number of orders in response. Defaults to 50 and max is 500.";
                };
                readonly after: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The response will include only ones submitted after this timestamp (exclusive.)";
                };
                readonly until: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The response will include only ones submitted until this timestamp (exclusive.)";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The chronological order of response based on the submission time. asc or desc. Defaults to desc.";
                };
                readonly nested: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If true, the result will roll up multi-leg orders under the legs field of primary order.";
                };
                readonly symbols: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma-separated list of symbols to filter by (ex. “AAPL,TSLA,MSFT”). A currency pair is required for crypto orders (ex. “BTCUSD,BCHUSD,LTCUSD,ETCUSD”).";
                };
                readonly side: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters down to orders that have a matching side field set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
                readonly type: "object";
                readonly title: "Order";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Order ID";
                    };
                    readonly client_order_id: {
                        readonly type: "string";
                        readonly description: "Client unique order ID";
                        readonly maxLength: 128;
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly submitted_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly filled_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly expired_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly canceled_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly failed_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly replaced_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly replaced_by: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "The order ID that this order was replaced by";
                    };
                    readonly replaces: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "The order ID that this order replaces";
                    };
                    readonly asset_id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "Asset ID (For options this represents the option contract ID)";
                    };
                    readonly symbol: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Asset symbol, required for all order classes except for `mleg`";
                    };
                    readonly asset_class: {
                        readonly type: "string";
                        readonly title: "AssetClass";
                        readonly enum: readonly ["us_equity", "us_option", "crypto"];
                        readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                        readonly "x-examples": {
                            readonly "example-1": "us_equity";
                        };
                        readonly examples: readonly ["us_equity"];
                    };
                    readonly notional: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                    };
                    readonly qty: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                    };
                    readonly filled_qty: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Filled quantity";
                    };
                    readonly filled_avg_price: {
                        readonly type: "string";
                        readonly description: "Filled average price";
                    };
                    readonly order_class: {
                        readonly type: "string";
                        readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                        readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                        readonly title: "OrderClass";
                        readonly examples: readonly ["bracket"];
                    };
                    readonly order_type: {
                        readonly type: "string";
                        readonly deprecated: true;
                        readonly description: "Deprecated in favour of the field \"type\" ";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                        readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                        readonly title: "OrderType";
                        readonly examples: readonly ["market"];
                    };
                    readonly side: {
                        readonly type: "string";
                        readonly enum: readonly ["buy", "sell"];
                        readonly title: "OrderSide";
                        readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                        readonly examples: readonly ["buy"];
                    };
                    readonly time_in_force: {
                        readonly type: "string";
                        readonly title: "TimeInForce";
                        readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                        readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                        readonly examples: readonly ["day"];
                    };
                    readonly limit_price: {
                        readonly type: "string";
                        readonly description: "Limit price";
                    };
                    readonly stop_price: {
                        readonly description: "Stop price";
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly title: "OrderStatus";
                        readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                        readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                        readonly examples: readonly ["new"];
                    };
                    readonly extended_hours: {
                        readonly type: "boolean";
                        readonly description: "If true, eligible for execution outside regular trading hours.";
                    };
                    readonly legs: {
                        readonly type: "array";
                        readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                        readonly items: {
                            readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                            readonly type: "object";
                            readonly title: "Order";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Order ID";
                                };
                                readonly client_order_id: {
                                    readonly type: "string";
                                    readonly description: "Client unique order ID";
                                    readonly maxLength: 128;
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly submitted_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly filled_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly expired_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly canceled_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly failed_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly replaced_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly replaced_by: {
                                    readonly type: "string";
                                    readonly format: "uuid";
                                    readonly description: "The order ID that this order was replaced by";
                                };
                                readonly replaces: {
                                    readonly type: "string";
                                    readonly format: "uuid";
                                    readonly description: "The order ID that this order replaces";
                                };
                                readonly asset_id: {
                                    readonly type: "string";
                                    readonly format: "uuid";
                                    readonly description: "Asset ID (For options this represents the option contract ID)";
                                };
                                readonly symbol: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly description: "Asset symbol";
                                };
                                readonly asset_class: {
                                    readonly type: "string";
                                    readonly title: "AssetClass";
                                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                    readonly "x-examples": {
                                        readonly "example-1": "us_equity";
                                    };
                                    readonly examples: readonly ["us_equity"];
                                };
                                readonly notional: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                                };
                                readonly qty: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                                };
                                readonly filled_qty: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly description: "Filled quantity";
                                };
                                readonly filled_avg_price: {
                                    readonly type: "string";
                                    readonly description: "Filled average price";
                                };
                                readonly order_class: {
                                    readonly type: "string";
                                    readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                    readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                    readonly title: "OrderClass";
                                    readonly examples: readonly ["bracket"];
                                };
                                readonly order_type: {
                                    readonly type: "string";
                                    readonly deprecated: true;
                                    readonly description: "Deprecated in favour of the field \"type\" ";
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                    readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                    readonly title: "OrderType";
                                    readonly examples: readonly ["market"];
                                };
                                readonly side: {
                                    readonly type: "string";
                                    readonly enum: readonly ["buy", "sell"];
                                    readonly title: "OrderSide";
                                    readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                    readonly examples: readonly ["buy"];
                                };
                                readonly time_in_force: {
                                    readonly type: "string";
                                    readonly title: "TimeInForce";
                                    readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                    readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                    readonly examples: readonly ["day"];
                                };
                                readonly limit_price: {
                                    readonly type: "string";
                                    readonly description: "Limit price";
                                };
                                readonly stop_price: {
                                    readonly description: "Stop price";
                                    readonly type: "string";
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly title: "OrderStatus";
                                    readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                    readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                    readonly examples: readonly ["new"];
                                };
                                readonly extended_hours: {
                                    readonly type: "boolean";
                                    readonly description: "If true, eligible for execution outside regular trading hours.";
                                };
                                readonly legs: {
                                    readonly type: "array";
                                    readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                    readonly items: {};
                                };
                                readonly trail_percent: {
                                    readonly type: "string";
                                    readonly description: "The percent value away from the high water mark for trailing stop orders.";
                                };
                                readonly trail_price: {
                                    readonly type: "string";
                                    readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                                };
                                readonly hwm: {
                                    readonly type: "string";
                                    readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                                };
                                readonly position_intent: {
                                    readonly type: "string";
                                    readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                    readonly title: "PositionIntent";
                                    readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                    readonly examples: readonly ["buy_to_open"];
                                };
                            };
                            readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                        };
                    };
                    readonly trail_percent: {
                        readonly type: "string";
                        readonly description: "The percent value away from the high water mark for trailing stop orders.";
                    };
                    readonly trail_price: {
                        readonly type: "string";
                        readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                    };
                    readonly hwm: {
                        readonly type: "string";
                        readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                    };
                    readonly position_intent: {
                        readonly type: "string";
                        readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                        readonly title: "PositionIntent";
                        readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                        readonly examples: readonly ["buy_to_open"];
                    };
                };
                readonly required: readonly ["notional", "type", "time_in_force"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCalendar: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The first date to retrieve data for (inclusive)";
                };
                readonly end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The last date to retrieve data for (inclusive)";
                };
                readonly date_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Indicates what start and end mean. Enum: ‘TRADING’ or ‘SETTLEMENT’. Default value is ‘TRADING’. If TRADING is specified, returns a calendar whose trading date matches start, end. If SETTLEMENT is specified, returns the calendar whose settlement date matches start and end.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly "x-examples": {
                    readonly "example-1": {
                        readonly date: "2022-02-01";
                        readonly open: "09:30";
                        readonly close: "16:00";
                        readonly session_open: "0700";
                        readonly session_close: "1900";
                    };
                };
                readonly title: "Calendar";
                readonly properties: {
                    readonly date: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "Date string in “%Y-%m-%d” format";
                    };
                    readonly open: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "The time the market opens at on this date in “%H:%M” format";
                    };
                    readonly close: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "The time the market closes at on this date in “%H:%M” format";
                    };
                    readonly settlement_date: {
                        readonly type: "string";
                        readonly "x-stoplight": {
                            readonly id: "e0st09dxvsjt5";
                        };
                        readonly description: "Date string in “%Y-%m-%d” format. representing the settlement date for the trade date.";
                    };
                };
                readonly required: readonly ["date", "open", "close", "settlement_date"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetClock: {
    readonly response: {
        readonly "200": {
            readonly title: "Clock";
            readonly type: "object";
            readonly properties: {
                readonly timestamp: {
                    readonly type: "string";
                    readonly description: "Current timestamp\n";
                    readonly format: "date-time";
                };
                readonly is_open: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the market is open\n";
                };
                readonly next_open: {
                    readonly type: "string";
                    readonly description: "Next Market open timestamp";
                    readonly format: "date-time";
                };
                readonly next_close: {
                    readonly type: "string";
                    readonly description: "Next market close timestamp";
                    readonly format: "date-time";
                };
            };
            readonly "x-examples": {
                readonly "example-1": {
                    readonly timestamp: "2019-08-24T14:15:22Z";
                    readonly is_open: true;
                    readonly next_open: "2019-08-24T14:15:22Z";
                    readonly next_close: "2019-08-24T14:15:22Z";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCryptoFundingTransfer: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transfer_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The crypto transfer to retrieve";
                };
            };
            readonly required: readonly ["transfer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "Transfers allow you to transfer assets into your end customer's account (deposits) or out (withdrawal).";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The crypto transfer ID";
                };
                readonly tx_hash: {
                    readonly type: "string";
                    readonly description: "On-chain transaction hash (e.g. 0xabc...xyz)";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["INCOMING", "OUTGOING"];
                    readonly examples: readonly ["INCOMING"];
                    readonly description: "`INCOMING` `OUTGOING`";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["PROCESSING", "FAILED", "COMPLETE"];
                    readonly examples: readonly ["PROCESSING"];
                    readonly description: "`PROCESSING` `FAILED` `COMPLETE`";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Amount of transfer denominated in the underlying crypto asset";
                };
                readonly usd_value: {
                    readonly type: "string";
                    readonly description: "Equivalent USD value at time of transfer";
                };
                readonly network_fee: {
                    readonly type: "string";
                };
                readonly fees: {
                    readonly type: "string";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly description: "Underlying network for given transfer";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly description: "Symbol of crypto asset for given transfer (e.g. BTC )";
                };
                readonly from_address: {
                    readonly type: "string";
                    readonly description: "Originating address of the transfer";
                };
                readonly to_address: {
                    readonly type: "string";
                    readonly description: "Destination address of the transfer";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Timedate when transfer was created";
                };
            };
            readonly "x-stoplight": {
                readonly id: "f986mttnx5c4n";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCryptoTransferEstimate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly asset: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The asset for the proposed transaction";
                };
                readonly from_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The originating address of the proposed transaction";
                };
                readonly to_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The destination address of the proposed transaction";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The amount, denoted in the specified asset, of the proposed transaction";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly fee: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOpenPosition: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol_or_asset_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "symbol or assetId";
                };
            };
            readonly required: readonly ["symbol_or_asset_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The positions API provides information about an account’s current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API.";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly asset_id: "904837e3-3b76-47ec-b432-046db621571b";
                    readonly symbol: "AAPL";
                    readonly exchange: "NASDAQ";
                    readonly asset_class: "us_equity";
                    readonly avg_entry_price: "100.0";
                    readonly qty: "5";
                    readonly qty_available: "4";
                    readonly side: "long";
                    readonly market_value: "600.0";
                    readonly cost_basis: "500.0";
                    readonly unrealized_pl: "100.0";
                    readonly unrealized_plpc: "0.20";
                    readonly unrealized_intraday_pl: "10.0";
                    readonly unrealized_intraday_plpc: "0.0084";
                    readonly current_price: "120.0";
                    readonly lastday_price: "119.0";
                    readonly change_today: "0.0084";
                };
                readonly "example-2": {
                    readonly asset_id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                    readonly symbol: "AAPL";
                    readonly exchange: "NASDAQ";
                    readonly asset_class: "us_equity";
                    readonly asset_marginable: false;
                    readonly qty: "2";
                    readonly qty_available: "2";
                    readonly avg_entry_price: "174.78";
                    readonly side: "long";
                    readonly market_value: "348.58";
                    readonly cost_basis: "349.56";
                    readonly unrealized_pl: "-0.98";
                    readonly unrealized_plpc: "-0.0028035244307129";
                    readonly unrealized_intraday_pl: "-0.98";
                    readonly unrealized_intraday_plpc: "-0.0028035244307129";
                    readonly current_price: "174.29";
                    readonly lastday_price: "174.61";
                    readonly change_today: "-0.0018326556325525";
                };
            };
            readonly title: "Position";
            readonly properties: {
                readonly asset_id: {
                    readonly type: "string";
                    readonly description: "Asset ID (For options this represents the option contract ID)";
                    readonly format: "uuid";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly description: "Symbol name of the asset";
                    readonly examples: readonly ["AAPL"];
                };
                readonly exchange: {
                    readonly title: "Exchange";
                    readonly type: "string";
                    readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                    readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                    readonly examples: readonly ["NYSE"];
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly avg_entry_price: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Average entry price of the position";
                };
                readonly qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "The number of shares";
                };
                readonly qty_available: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Total number of shares available minus open orders / locked for options covered call";
                };
                readonly side: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "“long”";
                };
                readonly market_value: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Total dollar amount of the position";
                };
                readonly cost_basis: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Total cost basis in dollar";
                };
                readonly unrealized_pl: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Unrealized profit/loss in dollars";
                };
                readonly unrealized_plpc: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Unrealized profit/loss percent (by a factor of 1)";
                };
                readonly unrealized_intraday_pl: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Unrealized profit/loss in dollars for the day";
                };
                readonly unrealized_intraday_plpc: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Unrealized profit/loss percent (by a factor of 1)";
                };
                readonly current_price: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Current asset price per share";
                };
                readonly lastday_price: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Last day’s asset price per share based on the closing value of the last trading day";
                };
                readonly change_today: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Percent change from last day price (by a factor of 1)";
                };
                readonly asset_marginable: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["asset_id", "symbol", "exchange", "asset_class", "avg_entry_price", "qty", "side", "market_value", "cost_basis", "unrealized_pl", "unrealized_plpc", "unrealized_intraday_pl", "unrealized_intraday_plpc", "current_price", "lastday_price", "change_today", "asset_marginable"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOptionContractSymbolOrId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol_or_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "symbol or contract ID";
                };
            };
            readonly required: readonly ["symbol_or_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The unique identifier of the option contract.";
                    readonly examples: readonly ["98359ef7-5124-49f3-85ea-5cf02df6defa"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly description: "The symbol representing the option contract.";
                    readonly examples: readonly ["AAPL250620C00100000"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the option contract.";
                    readonly examples: readonly ["AAPL Jun 20 2025 100 Call"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the option contract.\n\n`active` `inactive`";
                    readonly enum: readonly ["active", "inactive"];
                    readonly examples: readonly ["active"];
                };
                readonly tradable: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether the option contract is tradable.";
                    readonly examples: readonly [true];
                };
                readonly expiration_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The expiration date of the option contract.";
                    readonly examples: readonly ["2025-06-20"];
                };
                readonly root_symbol: {
                    readonly type: "string";
                    readonly description: "The root symbol of the option contract.";
                    readonly examples: readonly ["AAPL"];
                };
                readonly underlying_symbol: {
                    readonly type: "string";
                    readonly description: "The underlying symbol of the option contract.";
                    readonly examples: readonly ["AAPL"];
                };
                readonly underlying_asset_id: {
                    readonly type: "string";
                    readonly description: "The unique identifier of the underlying asset.";
                    readonly examples: readonly ["b0b6dd9d-8b9b-48a9-ba46-b9d54906e415"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the option contract.\n\n`call` `put`";
                    readonly enum: readonly ["call", "put"];
                    readonly examples: readonly ["call"];
                };
                readonly style: {
                    readonly type: "string";
                    readonly description: "The style of the option contract.\n\n`american` `european`";
                    readonly enum: readonly ["american", "european"];
                    readonly examples: readonly ["american"];
                };
                readonly strike_price: {
                    readonly type: "string";
                    readonly description: "The strike price of the option contract.";
                    readonly examples: readonly ["100"];
                };
                readonly multiplier: {
                    readonly type: "string";
                    readonly description: "The multiplier of the option contract is crucial for calculating both the trade premium and the extended strike price. In standard contracts, the multiplier is always set to 100.\nFor instance, if a contract is traded at $1.50 and the multiplier is 100, the total amount debited when buying the contract would be $150.00.\nSimilarly, when exercising a call contract, the total cost will be equal to the strike price times the multiplier.";
                    readonly examples: readonly ["100"];
                };
                readonly size: {
                    readonly type: "string";
                    readonly description: "Represents the number of underlying shares to be delivered in case the contract is exercised/assigned. For standard contracts, this is always 100.\nThis field should **not** be used as a multiplier, specially for non-standard contracts.";
                    readonly examples: readonly ["100"];
                };
                readonly open_interest: {
                    readonly type: "string";
                    readonly description: "The open interest of the option contract.";
                    readonly examples: readonly ["237"];
                };
                readonly open_interest_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The date of the open interest data.";
                    readonly examples: readonly ["2023-12-11"];
                };
                readonly close_price: {
                    readonly type: "string";
                    readonly description: "The close price of the option contract.";
                    readonly examples: readonly ["148.38"];
                };
                readonly close_price_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The date of the close price data.";
                    readonly examples: readonly ["2023-12-11"];
                };
                readonly deliverables: {
                    readonly type: "array";
                    readonly description: "Represents the deliverables tied to the option contract. While standard contracts entail a single deliverable, non-standard ones can encompass multiple deliverables, each potentially customized with distinct parameters.\nThis array is included in the list contracts response only if the query parameter show_deliverables=true is provided.\n";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of deliverable, indicating whether it's cash or equity. For standard contracts, it is always \"equity\".\n\n\n`cash` `equity`";
                                readonly enum: readonly ["cash", "equity"];
                                readonly examples: readonly ["equity"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "Symbol of the deliverable. For standard contracts, this is equivalent to the underlying symbol of the contract.\n";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the deliverable asset. For standard contracts, this is equivalent to underlying_asset_id of the contracts.\nThis field is not returned for cash deliverables.\n";
                                readonly examples: readonly ["b0b6dd9d-8b9b-48a9-ba46-b9d54906e415"];
                            };
                            readonly amount: {
                                readonly type: "string";
                                readonly description: "The deliverable amount. For cash deliverables, this is the cash amount.\nFor standard contract, this is always 100.\nThis field can be null in case the deliverable settlement is delayed and the amount is yet to be determined.\n";
                                readonly examples: readonly ["100"];
                            };
                            readonly allocation_percentage: {
                                readonly type: "string";
                                readonly description: "Cost allocation percentage of the deliverable.\nThis is used to determine the cost basis of the equity shares received from the exercise, specially for non-standard contracts with multiple deliverables.\n";
                                readonly examples: readonly ["100"];
                            };
                            readonly settlement_type: {
                                readonly type: "string";
                                readonly description: "Indicates when the deliverable will be settled if the contract is exercised/assigned.\n\n\n`T+0` `T+1` `T+2` `T+3` `T+4` `T+5`";
                                readonly enum: readonly ["T+0", "T+1", "T+2", "T+3", "T+4", "T+5"];
                                readonly examples: readonly ["T+2"];
                            };
                            readonly settlement_method: {
                                readonly type: "string";
                                readonly description: "Indicates the settlement method that will be used:\n- **BTOB**: Broker to Broker\n- **CADF**: Cash Difference\n- **CAFX**: Cash Fixed\n- **CCC**: Correspondent Clearing Corp\n\n\n`BTOB` `CADF` `CAFX` `CCC`";
                                readonly enum: readonly ["BTOB", "CADF", "CAFX", "CCC"];
                                readonly examples: readonly ["CCC"];
                            };
                            readonly delayed_settlement: {
                                readonly type: "boolean";
                                readonly description: "If true, the settlement of the deliverable will be delayed.\nFor instance, in the event of a contract with a delayed deliverable being exercised, both the availability of the deliverable and its settlement may be postponed beyond the typical timeframe.\n";
                                readonly examples: readonly [false];
                            };
                        };
                        readonly required: readonly ["type", "symbol", "amount", "allocation_percentage", "settlement_type", "settlement_method", "delayed_settlement"];
                    };
                };
            };
            readonly required: readonly ["id", "symbol", "name", "status", "tradable", "expiration_date", "underlying_symbol", "underlying_asset_id", "type", "style", "strike_price", "multiplier", "size"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly title: "Error";
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["code", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOptionsContracts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly underlying_symbols: {
                    readonly type: "string";
                    readonly examples: readonly ["AAPL,SPY"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts by one or more underlying symbols.";
                };
                readonly show_deliverables: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include deliverables array in the response.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["active", "inactive"];
                    readonly examples: readonly ["active"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts by status (active/inactive). By default only active contracts are returned.";
                };
                readonly expiration_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2025-06-20"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts by the exact expiration date (format: YYYY-MM-DD).";
                };
                readonly expiration_date_gte: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2025-06-20"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts with expiration date greater than or equal to the specified date.";
                };
                readonly expiration_date_lte: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2025-06-20"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts with expiration date less than or equal to the specified date. By default this is set to the next weekend.";
                };
                readonly root_symbol: {
                    readonly type: "string";
                    readonly examples: readonly ["AAPL"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts by the root symbol.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["call", "put"];
                    readonly examples: readonly ["call"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts by the type (call/put).";
                };
                readonly style: {
                    readonly type: "string";
                    readonly enum: readonly ["american", "european"];
                    readonly examples: readonly ["american"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts by the style (american/european).";
                };
                readonly strike_price_gte: {
                    readonly type: "number";
                    readonly examples: readonly [50];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts with strike price greater than or equal to the specified value.";
                };
                readonly strike_price_lte: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter contracts with strike price less than or equal to the specified value.";
                };
                readonly page_token: {
                    readonly type: "string";
                    readonly examples: readonly ["MA=="];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used for pagination, this token retrieves the next page of results. It is obtained from the response of the preceding page when additional pages are available.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly examples: readonly [100];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of contracts to limit per page (default=100, max=10000).";
                };
                readonly ppind: {
                    readonly type: "boolean";
                    readonly examples: readonly ["true"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ppind(Penny Program Indicator) field indicates whether an option contract is eligible for penny price increments,\nwith `true` meaning it is part of the Penny Program and `false` meaning it is not.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly option_contracts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The unique identifier of the option contract.";
                                readonly examples: readonly ["98359ef7-5124-49f3-85ea-5cf02df6defa"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol representing the option contract.";
                                readonly examples: readonly ["AAPL250620C00100000"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the option contract.";
                                readonly examples: readonly ["AAPL Jun 20 2025 100 Call"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the option contract.\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Indicates whether the option contract is tradable.";
                                readonly examples: readonly [true];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The expiration date of the option contract.";
                                readonly examples: readonly ["2025-06-20"];
                            };
                            readonly root_symbol: {
                                readonly type: "string";
                                readonly description: "The root symbol of the option contract.";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly underlying_symbol: {
                                readonly type: "string";
                                readonly description: "The underlying symbol of the option contract.";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly underlying_asset_id: {
                                readonly type: "string";
                                readonly description: "The unique identifier of the underlying asset.";
                                readonly examples: readonly ["b0b6dd9d-8b9b-48a9-ba46-b9d54906e415"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the option contract.\n\n`call` `put`";
                                readonly enum: readonly ["call", "put"];
                                readonly examples: readonly ["call"];
                            };
                            readonly style: {
                                readonly type: "string";
                                readonly description: "The style of the option contract.\n\n`american` `european`";
                                readonly enum: readonly ["american", "european"];
                                readonly examples: readonly ["american"];
                            };
                            readonly strike_price: {
                                readonly type: "string";
                                readonly description: "The strike price of the option contract.";
                                readonly examples: readonly ["100"];
                            };
                            readonly multiplier: {
                                readonly type: "string";
                                readonly description: "The multiplier of the option contract is crucial for calculating both the trade premium and the extended strike price. In standard contracts, the multiplier is always set to 100.\nFor instance, if a contract is traded at $1.50 and the multiplier is 100, the total amount debited when buying the contract would be $150.00.\nSimilarly, when exercising a call contract, the total cost will be equal to the strike price times the multiplier.";
                                readonly examples: readonly ["100"];
                            };
                            readonly size: {
                                readonly type: "string";
                                readonly description: "Represents the number of underlying shares to be delivered in case the contract is exercised/assigned. For standard contracts, this is always 100.\nThis field should **not** be used as a multiplier, specially for non-standard contracts.";
                                readonly examples: readonly ["100"];
                            };
                            readonly open_interest: {
                                readonly type: "string";
                                readonly description: "The open interest of the option contract.";
                                readonly examples: readonly ["237"];
                            };
                            readonly open_interest_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The date of the open interest data.";
                                readonly examples: readonly ["2023-12-11"];
                            };
                            readonly close_price: {
                                readonly type: "string";
                                readonly description: "The close price of the option contract.";
                                readonly examples: readonly ["148.38"];
                            };
                            readonly close_price_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The date of the close price data.";
                                readonly examples: readonly ["2023-12-11"];
                            };
                            readonly deliverables: {
                                readonly type: "array";
                                readonly description: "Represents the deliverables tied to the option contract. While standard contracts entail a single deliverable, non-standard ones can encompass multiple deliverables, each potentially customized with distinct parameters.\nThis array is included in the list contracts response only if the query parameter show_deliverables=true is provided.\n";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Type of deliverable, indicating whether it's cash or equity. For standard contracts, it is always \"equity\".\n\n\n`cash` `equity`";
                                            readonly enum: readonly ["cash", "equity"];
                                            readonly examples: readonly ["equity"];
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "Symbol of the deliverable. For standard contracts, this is equivalent to the underlying symbol of the contract.\n";
                                            readonly examples: readonly ["AAPL"];
                                        };
                                        readonly asset_id: {
                                            readonly type: "string";
                                            readonly description: "Unique identifier of the deliverable asset. For standard contracts, this is equivalent to underlying_asset_id of the contracts.\nThis field is not returned for cash deliverables.\n";
                                            readonly examples: readonly ["b0b6dd9d-8b9b-48a9-ba46-b9d54906e415"];
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                            readonly description: "The deliverable amount. For cash deliverables, this is the cash amount.\nFor standard contract, this is always 100.\nThis field can be null in case the deliverable settlement is delayed and the amount is yet to be determined.\n";
                                            readonly examples: readonly ["100"];
                                        };
                                        readonly allocation_percentage: {
                                            readonly type: "string";
                                            readonly description: "Cost allocation percentage of the deliverable.\nThis is used to determine the cost basis of the equity shares received from the exercise, specially for non-standard contracts with multiple deliverables.\n";
                                            readonly examples: readonly ["100"];
                                        };
                                        readonly settlement_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates when the deliverable will be settled if the contract is exercised/assigned.\n\n\n`T+0` `T+1` `T+2` `T+3` `T+4` `T+5`";
                                            readonly enum: readonly ["T+0", "T+1", "T+2", "T+3", "T+4", "T+5"];
                                            readonly examples: readonly ["T+2"];
                                        };
                                        readonly settlement_method: {
                                            readonly type: "string";
                                            readonly description: "Indicates the settlement method that will be used:\n- **BTOB**: Broker to Broker\n- **CADF**: Cash Difference\n- **CAFX**: Cash Fixed\n- **CCC**: Correspondent Clearing Corp\n\n\n`BTOB` `CADF` `CAFX` `CCC`";
                                            readonly enum: readonly ["BTOB", "CADF", "CAFX", "CCC"];
                                            readonly examples: readonly ["CCC"];
                                        };
                                        readonly delayed_settlement: {
                                            readonly type: "boolean";
                                            readonly description: "If true, the settlement of the deliverable will be delayed.\nFor instance, in the event of a contract with a delayed deliverable being exercised, both the availability of the deliverable and its settlement may be postponed beyond the typical timeframe.\n";
                                            readonly examples: readonly [false];
                                        };
                                    };
                                    readonly required: readonly ["type", "symbol", "amount", "allocation_percentage", "settlement_type", "settlement_method", "delayed_settlement"];
                                };
                            };
                        };
                        readonly required: readonly ["id", "symbol", "name", "status", "tradable", "expiration_date", "underlying_symbol", "underlying_asset_id", "type", "style", "strike_price", "multiplier", "size"];
                    };
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly description: "Use this token in your next API call to paginate through the dataset and retrieve the next page of results. A null token indicates there are no more data to fetch.\n";
                    readonly examples: readonly ["MTAwMA=="];
                };
            };
            readonly required: readonly ["option_contracts"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOrderByClientOrderId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly client_order_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The client-assigned order ID.";
                };
            };
            readonly required: readonly ["client_order_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
            readonly type: "object";
            readonly title: "Order";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Order ID";
                };
                readonly client_order_id: {
                    readonly type: "string";
                    readonly description: "Client unique order ID";
                    readonly maxLength: 128;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly submitted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly filled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly expired_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly failed_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_by: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order was replaced by";
                };
                readonly replaces: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order replaces";
                };
                readonly asset_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "Asset ID (For options this represents the option contract ID)";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Asset symbol, required for all order classes except for `mleg`";
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly notional: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                };
                readonly qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                };
                readonly filled_qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Filled quantity";
                };
                readonly filled_avg_price: {
                    readonly type: "string";
                    readonly description: "Filled average price";
                };
                readonly order_class: {
                    readonly type: "string";
                    readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                    readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                    readonly title: "OrderClass";
                    readonly examples: readonly ["bracket"];
                };
                readonly order_type: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "Deprecated in favour of the field \"type\" ";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                    readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                    readonly title: "OrderType";
                    readonly examples: readonly ["market"];
                };
                readonly side: {
                    readonly type: "string";
                    readonly enum: readonly ["buy", "sell"];
                    readonly title: "OrderSide";
                    readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                    readonly examples: readonly ["buy"];
                };
                readonly time_in_force: {
                    readonly type: "string";
                    readonly title: "TimeInForce";
                    readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                    readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                    readonly examples: readonly ["day"];
                };
                readonly limit_price: {
                    readonly type: "string";
                    readonly description: "Limit price";
                };
                readonly stop_price: {
                    readonly description: "Stop price";
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly title: "OrderStatus";
                    readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                    readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                    readonly examples: readonly ["new"];
                };
                readonly extended_hours: {
                    readonly type: "boolean";
                    readonly description: "If true, eligible for execution outside regular trading hours.";
                };
                readonly legs: {
                    readonly type: "array";
                    readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                    readonly items: {
                        readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                        readonly type: "object";
                        readonly title: "Order";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Order ID";
                            };
                            readonly client_order_id: {
                                readonly type: "string";
                                readonly description: "Client unique order ID";
                                readonly maxLength: 128;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly submitted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly filled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expired_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly failed_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order was replaced by";
                            };
                            readonly replaces: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order replaces";
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID (For options this represents the option contract ID)";
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Asset symbol";
                            };
                            readonly asset_class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly notional: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                            };
                            readonly qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                            };
                            readonly filled_qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Filled quantity";
                            };
                            readonly filled_avg_price: {
                                readonly type: "string";
                                readonly description: "Filled average price";
                            };
                            readonly order_class: {
                                readonly type: "string";
                                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                readonly title: "OrderClass";
                                readonly examples: readonly ["bracket"];
                            };
                            readonly order_type: {
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Deprecated in favour of the field \"type\" ";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                readonly title: "OrderType";
                                readonly examples: readonly ["market"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly enum: readonly ["buy", "sell"];
                                readonly title: "OrderSide";
                                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                readonly examples: readonly ["buy"];
                            };
                            readonly time_in_force: {
                                readonly type: "string";
                                readonly title: "TimeInForce";
                                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                readonly examples: readonly ["day"];
                            };
                            readonly limit_price: {
                                readonly type: "string";
                                readonly description: "Limit price";
                            };
                            readonly stop_price: {
                                readonly description: "Stop price";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly title: "OrderStatus";
                                readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                readonly examples: readonly ["new"];
                            };
                            readonly extended_hours: {
                                readonly type: "boolean";
                                readonly description: "If true, eligible for execution outside regular trading hours.";
                            };
                            readonly legs: {
                                readonly type: "array";
                                readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                readonly items: {};
                            };
                            readonly trail_percent: {
                                readonly type: "string";
                                readonly description: "The percent value away from the high water mark for trailing stop orders.";
                            };
                            readonly trail_price: {
                                readonly type: "string";
                                readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                            };
                            readonly hwm: {
                                readonly type: "string";
                                readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                            };
                            readonly position_intent: {
                                readonly type: "string";
                                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                readonly title: "PositionIntent";
                                readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                readonly examples: readonly ["buy_to_open"];
                            };
                        };
                        readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                    };
                };
                readonly trail_percent: {
                    readonly type: "string";
                    readonly description: "The percent value away from the high water mark for trailing stop orders.";
                };
                readonly trail_price: {
                    readonly type: "string";
                    readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                };
                readonly hwm: {
                    readonly type: "string";
                    readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                };
                readonly position_intent: {
                    readonly type: "string";
                    readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                    readonly title: "PositionIntent";
                    readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                    readonly examples: readonly ["buy_to_open"];
                };
            };
            readonly required: readonly ["notional", "type", "time_in_force"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOrderByOrderId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "order id";
                };
            };
            readonly required: readonly ["order_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly nested: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If true, the result will roll up multi-leg orders under the legs field of primary order.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
            readonly type: "object";
            readonly title: "Order";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Order ID";
                };
                readonly client_order_id: {
                    readonly type: "string";
                    readonly description: "Client unique order ID";
                    readonly maxLength: 128;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly submitted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly filled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly expired_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly failed_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_by: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order was replaced by";
                };
                readonly replaces: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order replaces";
                };
                readonly asset_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "Asset ID (For options this represents the option contract ID)";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Asset symbol, required for all order classes except for `mleg`";
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly notional: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                };
                readonly qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                };
                readonly filled_qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Filled quantity";
                };
                readonly filled_avg_price: {
                    readonly type: "string";
                    readonly description: "Filled average price";
                };
                readonly order_class: {
                    readonly type: "string";
                    readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                    readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                    readonly title: "OrderClass";
                    readonly examples: readonly ["bracket"];
                };
                readonly order_type: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "Deprecated in favour of the field \"type\" ";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                    readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                    readonly title: "OrderType";
                    readonly examples: readonly ["market"];
                };
                readonly side: {
                    readonly type: "string";
                    readonly enum: readonly ["buy", "sell"];
                    readonly title: "OrderSide";
                    readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                    readonly examples: readonly ["buy"];
                };
                readonly time_in_force: {
                    readonly type: "string";
                    readonly title: "TimeInForce";
                    readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                    readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                    readonly examples: readonly ["day"];
                };
                readonly limit_price: {
                    readonly type: "string";
                    readonly description: "Limit price";
                };
                readonly stop_price: {
                    readonly description: "Stop price";
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly title: "OrderStatus";
                    readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                    readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                    readonly examples: readonly ["new"];
                };
                readonly extended_hours: {
                    readonly type: "boolean";
                    readonly description: "If true, eligible for execution outside regular trading hours.";
                };
                readonly legs: {
                    readonly type: "array";
                    readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                    readonly items: {
                        readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                        readonly type: "object";
                        readonly title: "Order";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Order ID";
                            };
                            readonly client_order_id: {
                                readonly type: "string";
                                readonly description: "Client unique order ID";
                                readonly maxLength: 128;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly submitted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly filled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expired_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly failed_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order was replaced by";
                            };
                            readonly replaces: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order replaces";
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID (For options this represents the option contract ID)";
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Asset symbol";
                            };
                            readonly asset_class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly notional: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                            };
                            readonly qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                            };
                            readonly filled_qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Filled quantity";
                            };
                            readonly filled_avg_price: {
                                readonly type: "string";
                                readonly description: "Filled average price";
                            };
                            readonly order_class: {
                                readonly type: "string";
                                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                readonly title: "OrderClass";
                                readonly examples: readonly ["bracket"];
                            };
                            readonly order_type: {
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Deprecated in favour of the field \"type\" ";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                readonly title: "OrderType";
                                readonly examples: readonly ["market"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly enum: readonly ["buy", "sell"];
                                readonly title: "OrderSide";
                                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                readonly examples: readonly ["buy"];
                            };
                            readonly time_in_force: {
                                readonly type: "string";
                                readonly title: "TimeInForce";
                                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                readonly examples: readonly ["day"];
                            };
                            readonly limit_price: {
                                readonly type: "string";
                                readonly description: "Limit price";
                            };
                            readonly stop_price: {
                                readonly description: "Stop price";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly title: "OrderStatus";
                                readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                readonly examples: readonly ["new"];
                            };
                            readonly extended_hours: {
                                readonly type: "boolean";
                                readonly description: "If true, eligible for execution outside regular trading hours.";
                            };
                            readonly legs: {
                                readonly type: "array";
                                readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                readonly items: {};
                            };
                            readonly trail_percent: {
                                readonly type: "string";
                                readonly description: "The percent value away from the high water mark for trailing stop orders.";
                            };
                            readonly trail_price: {
                                readonly type: "string";
                                readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                            };
                            readonly hwm: {
                                readonly type: "string";
                                readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                            };
                            readonly position_intent: {
                                readonly type: "string";
                                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                readonly title: "PositionIntent";
                                readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                readonly examples: readonly ["buy_to_open"];
                            };
                        };
                        readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                    };
                };
                readonly trail_percent: {
                    readonly type: "string";
                    readonly description: "The percent value away from the high water mark for trailing stop orders.";
                };
                readonly trail_price: {
                    readonly type: "string";
                    readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                };
                readonly hwm: {
                    readonly type: "string";
                    readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                };
                readonly position_intent: {
                    readonly type: "string";
                    readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                    readonly title: "PositionIntent";
                    readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                    readonly examples: readonly ["buy_to_open"];
                };
            };
            readonly required: readonly ["notional", "type", "time_in_force"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Assets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "e.g. “active”. By default, all statuses are included.";
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Defaults to us_equity.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional AMEX, ARCA, BATS, NYSE, NASDAQ, NYSEARCA or OTC";
                };
                readonly attributes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                    };
                    readonly default: readonly [];
                    readonly examples: readonly ["ptp_no_exception", "ipo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma separated values to query for more than one attribute. Assets which have any of the given attributes will be included.\nSupported values are `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, `options_late_close`.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                readonly type: "object";
                readonly "x-examples": {
                    readonly "example-1": {
                        readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "AAPL";
                        readonly name: "Apple Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    };
                };
                readonly title: "Assets";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "Asset ID";
                    };
                    readonly class: {
                        readonly type: "string";
                        readonly title: "AssetClass";
                        readonly enum: readonly ["us_equity", "us_option", "crypto"];
                        readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                        readonly "x-examples": {
                            readonly "example-1": "us_equity";
                        };
                        readonly examples: readonly ["us_equity"];
                    };
                    readonly exchange: {
                        readonly title: "Exchange";
                        readonly type: "string";
                        readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                        readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                        readonly examples: readonly ["NYSE"];
                    };
                    readonly symbol: {
                        readonly type: "string";
                        readonly description: "The symbol of the asset";
                        readonly examples: readonly ["AAPL"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "The official name of the asset";
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "active or inactive\n\n`active` `inactive`";
                        readonly enum: readonly ["active", "inactive"];
                        readonly examples: readonly ["active"];
                    };
                    readonly tradable: {
                        readonly type: "boolean";
                        readonly description: "Asset is tradable on Alpaca or not";
                    };
                    readonly marginable: {
                        readonly type: "boolean";
                        readonly description: "Asset is marginable or not";
                    };
                    readonly shortable: {
                        readonly type: "boolean";
                        readonly description: "Asset is shortable or not";
                    };
                    readonly easy_to_borrow: {
                        readonly type: "boolean";
                        readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                    };
                    readonly fractionable: {
                        readonly type: "boolean";
                        readonly description: "Asset is fractionable or not";
                    };
                    readonly maintenance_margin_requirement: {
                        readonly type: "number";
                        readonly "x-stoplight": {
                            readonly id: "kujwjd2dcq9bn";
                        };
                        readonly deprecated: true;
                        readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                    };
                    readonly margin_requirement_long: {
                        readonly type: "string";
                        readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                    };
                    readonly margin_requirement_short: {
                        readonly type: "string";
                        readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                    };
                    readonly attributes: {
                        readonly type: "array";
                        readonly "x-stoplight": {
                            readonly id: "40mjg4fj0ykl8";
                        };
                        readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                            readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                        };
                        readonly examples: readonly ["ptp_no_exception", "ipo"];
                    };
                };
                readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2AssetsSymbolOrAssetId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol_or_asset_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "symbol or assetId";
                };
            };
            readonly required: readonly ["symbol_or_asset_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                    readonly class: "us_equity";
                    readonly exchange: "NASDAQ";
                    readonly symbol: "AAPL";
                    readonly name: "Apple Inc. Common Stock";
                    readonly status: "active";
                    readonly tradable: true;
                    readonly marginable: true;
                    readonly shortable: true;
                    readonly easy_to_borrow: true;
                    readonly fractionable: true;
                };
            };
            readonly title: "Assets";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "Asset ID";
                };
                readonly class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly exchange: {
                    readonly title: "Exchange";
                    readonly type: "string";
                    readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                    readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                    readonly examples: readonly ["NYSE"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly description: "The symbol of the asset";
                    readonly examples: readonly ["AAPL"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "The official name of the asset";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "active or inactive\n\n`active` `inactive`";
                    readonly enum: readonly ["active", "inactive"];
                    readonly examples: readonly ["active"];
                };
                readonly tradable: {
                    readonly type: "boolean";
                    readonly description: "Asset is tradable on Alpaca or not";
                };
                readonly marginable: {
                    readonly type: "boolean";
                    readonly description: "Asset is marginable or not";
                };
                readonly shortable: {
                    readonly type: "boolean";
                    readonly description: "Asset is shortable or not";
                };
                readonly easy_to_borrow: {
                    readonly type: "boolean";
                    readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                };
                readonly fractionable: {
                    readonly type: "boolean";
                    readonly description: "Asset is fractionable or not";
                };
                readonly maintenance_margin_requirement: {
                    readonly type: "number";
                    readonly "x-stoplight": {
                        readonly id: "kujwjd2dcq9bn";
                    };
                    readonly deprecated: true;
                    readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                };
                readonly margin_requirement_long: {
                    readonly type: "string";
                    readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                };
                readonly margin_requirement_short: {
                    readonly type: "string";
                    readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                };
                readonly attributes: {
                    readonly type: "array";
                    readonly "x-stoplight": {
                        readonly id: "40mjg4fj0ykl8";
                    };
                    readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                        readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                    };
                    readonly examples: readonly ["ptp_no_exception", "ipo"];
                };
            };
            readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2CorporateActionsAnnouncements: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly ca_types: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma-delimited list of Dividend, Merger, Spinoff, or Split.";
                };
                readonly since: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.";
                };
                readonly until: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The symbol of the company initiating the announcement.";
                };
                readonly cusip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The CUSIP of the company initiating the announcement.";
                };
                readonly date_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "declaration_date, ex_date, record_date, or payable_date";
                };
            };
            readonly required: readonly ["ca_types", "since", "until"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly corporate_actions_id: {
                        readonly type: "string";
                    };
                    readonly ca_type: {
                        readonly type: "string";
                    };
                    readonly ca_sub_type: {
                        readonly type: "string";
                    };
                    readonly initiating_symbol: {
                        readonly type: "string";
                    };
                    readonly initiating_original_cusip: {
                        readonly type: "string";
                    };
                    readonly target_symbol: {
                        readonly type: "string";
                    };
                    readonly target_original_cusip: {
                        readonly type: "string";
                    };
                    readonly declaration_date: {
                        readonly type: "string";
                    };
                    readonly expiration_date: {
                        readonly type: "string";
                    };
                    readonly record_date: {
                        readonly type: "string";
                    };
                    readonly payable_date: {
                        readonly type: "string";
                    };
                    readonly cash: {
                        readonly type: "string";
                    };
                    readonly old_rate: {
                        readonly type: "string";
                    };
                    readonly new_rate: {
                        readonly type: "string";
                    };
                    readonly corporate_action_id: {
                        readonly type: "string";
                    };
                    readonly ex_date: {
                        readonly type: "string";
                    };
                };
            };
            readonly "x-examples": {
                readonly "Example 1": readonly [{
                    readonly id: "be3c368a-4c7c-4384-808e-f02c9f5a8afe";
                    readonly corporate_actions_id: "F58684224_XY37";
                    readonly ca_type: "Dividend";
                    readonly ca_sub_type: "DIV";
                    readonly initiating_symbol: "MLLAX";
                    readonly initiating_original_cusip: 5.5275e+105;
                    readonly target_symbol: "MLLAX";
                    readonly target_original_cusip: 5.5275e+105;
                    readonly declaration_date: "2021-01-05";
                    readonly expiration_date: "2021-01-12";
                    readonly record_date: "2021-01-13";
                    readonly payable_date: "2021-01-14";
                    readonly cash: "0.018";
                    readonly old_rate: "1";
                    readonly new_rate: "1";
                }, {
                    readonly corporate_action_id: "48251W104_AD21";
                    readonly ca_type: "Dividend";
                    readonly ca_sub_type: "cash";
                    readonly initiating_symbol: "KKR";
                    readonly initiating_original_cusip: "G52830109";
                    readonly target_symbol: "KKR";
                    readonly target_original_cusip: "G52830109";
                    readonly declaration_date: "2021-11-01";
                    readonly ex_date: "2021-11-12";
                    readonly record_date: "2021-11-15";
                    readonly payable_date: "2021-11-30";
                    readonly cash: "0.145";
                    readonly old_rate: "1";
                    readonly new_rate: "1";
                }];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2CorporateActionsAnnouncementsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The corporate announcement’s id";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly "x-examples": {
                readonly "Example 1": {
                    readonly id: "be3c368a-4c7c-4384-808e-f02c9f5a8afe";
                    readonly corporate_actions_id: "F58684224_XY37";
                    readonly ca_type: "Dividend";
                    readonly ca_sub_type: "DIV";
                    readonly initiating_symbol: "MLLAX";
                    readonly initiating_original_cusip: 5.5275e+105;
                    readonly target_symbol: "MLLAX";
                    readonly target_original_cusip: 5.5275e+105;
                    readonly declaration_date: "2021-01-05";
                    readonly expiration_date: "2021-01-12";
                    readonly record_date: "2021-01-13";
                    readonly payable_date: "2021-01-14";
                    readonly cash: "0.018";
                    readonly old_rate: "1";
                    readonly new_rate: "1";
                };
            };
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly corporate_actions_id: {
                    readonly type: "string";
                };
                readonly ca_type: {
                    readonly type: "string";
                    readonly description: "A comma-delimited list of Dividend, Merger, Spinoff, or Split.";
                };
                readonly ca_sub_type: {
                    readonly type: "string";
                };
                readonly initiating_symbol: {
                    readonly type: "string";
                };
                readonly initiating_original_cusip: {
                    readonly type: "string";
                };
                readonly target_symbol: {
                    readonly type: "string";
                };
                readonly target_original_cusip: {
                    readonly type: "string";
                };
                readonly declaration_date: {
                    readonly type: "string";
                };
                readonly expiration_date: {
                    readonly type: "string";
                };
                readonly record_date: {
                    readonly type: "string";
                };
                readonly payable_date: {
                    readonly type: "string";
                };
                readonly cash: {
                    readonly type: "string";
                };
                readonly old_rate: {
                    readonly type: "string";
                };
                readonly new_rate: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWatchlistById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly watchlist_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "watchlist id";
                };
            };
            readonly required: readonly ["watchlist_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWatchlistByName: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "name of the watchlist";
                };
            };
            readonly required: readonly ["name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWatchlists: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name.\n";
                readonly type: "object";
                readonly "x-examples": {
                    readonly "example-1": {
                        readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                        readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                        readonly created_at: "2022-01-31T21:49:05.14628Z";
                        readonly updated_at: "2022-01-31T21:49:05.14628Z";
                        readonly name: "Primary Watchlist";
                    };
                };
                readonly title: "Watchlist";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "watchlist id";
                    };
                    readonly account_id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly description: "account ID";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly description: "user-defined watchlist name (up to 64 characters)";
                    };
                };
                readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListCryptoFundingTransfers: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "Transfers allow you to transfer assets into your end customer's account (deposits) or out (withdrawal).";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The crypto transfer ID";
                };
                readonly tx_hash: {
                    readonly type: "string";
                    readonly description: "On-chain transaction hash (e.g. 0xabc...xyz)";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["INCOMING", "OUTGOING"];
                    readonly examples: readonly ["INCOMING"];
                    readonly description: "`INCOMING` `OUTGOING`";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["PROCESSING", "FAILED", "COMPLETE"];
                    readonly examples: readonly ["PROCESSING"];
                    readonly description: "`PROCESSING` `FAILED` `COMPLETE`";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Amount of transfer denominated in the underlying crypto asset";
                };
                readonly usd_value: {
                    readonly type: "string";
                    readonly description: "Equivalent USD value at time of transfer";
                };
                readonly network_fee: {
                    readonly type: "string";
                };
                readonly fees: {
                    readonly type: "string";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly description: "Underlying network for given transfer";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly description: "Symbol of crypto asset for given transfer (e.g. BTC )";
                };
                readonly from_address: {
                    readonly type: "string";
                    readonly description: "Originating address of the transfer";
                };
                readonly to_address: {
                    readonly type: "string";
                    readonly description: "Destination address of the transfer";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Timedate when transfer was created";
                };
            };
            readonly "x-stoplight": {
                readonly id: "f986mttnx5c4n";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListCryptoFundingWallets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly asset: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                };
                readonly address: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Timestamp (RFC3339) of account creation.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListWhitelistedAddress: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique ID for whitelisted address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly description: "Underlying network this address represents";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly description: "Symbol of underlying asset for the whitelisted address";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "The whitelisted address";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of whitelisted address which is either ACTIVE or PENDING. Whitelisted addresses will be subjected to a 24 waiting period. After the waiting period is over the status will become ACTIVE.\n\n`APPROVED` `PENDING`";
                    readonly enum: readonly ["APPROVED", "PENDING"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Timestamp (RFC3339) of account creation.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OptionExercise: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol_or_contract_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Option contract symbol or ID.";
                };
            };
            readonly required: readonly ["symbol_or_contract_id"];
        }];
    };
    readonly response: {
        readonly "403": {
            readonly title: "Error";
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["code", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly title: "Error";
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["code", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchAccountConfig: {
    readonly body: {
        readonly title: "AccountConfigurations";
        readonly type: "object";
        readonly "x-examples": {
            readonly "example-1": {
                readonly dtbp_check: "entry";
                readonly trade_confirm_email: "all";
                readonly suspend_trade: false;
                readonly no_shorting: false;
                readonly fractional_trading: true;
                readonly max_margin_multiplier: "4";
                readonly pdt_check: "entry";
            };
        };
        readonly description: "The account configuration API provides custom configurations about your trading account settings. These configurations control various allow you to modify settings to suit your trading needs.";
        readonly properties: {
            readonly dtbp_check: {
                readonly type: "string";
                readonly description: "both, entry, or exit. Controls Day Trading Margin Call (DTMC) checks.";
                readonly enum: readonly ["both", "entry", "exit"];
            };
            readonly trade_confirm_email: {
                readonly type: "string";
                readonly description: "all or none. If none, emails for order fills are not sent.";
            };
            readonly suspend_trade: {
                readonly type: "boolean";
                readonly description: "If true, new orders are blocked.";
            };
            readonly no_shorting: {
                readonly type: "boolean";
                readonly description: "If true, account becomes long-only mode.";
            };
            readonly fractional_trading: {
                readonly type: "boolean";
                readonly description: "If true, account is able to participate in fractional trading";
            };
            readonly max_margin_multiplier: {
                readonly type: "string";
                readonly description: "Can be \"1\", \"2\", or \"4\"";
            };
            readonly max_options_trading_level: {
                readonly type: "integer";
                readonly description: "The desired maximum options trading level. 0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.";
                readonly enum: readonly [0, 1, 2, 3];
            };
            readonly pdt_check: {
                readonly type: "string";
                readonly description: "`both`, `entry`, or `exit`. If entry orders will be rejected on entering a position if it could result in PDT being set for the account. exit will reject exiting orders if they would result in PDT being set.";
                readonly examples: readonly ["entry"];
            };
            readonly ptp_no_exception_entry: {
                readonly type: "boolean";
                readonly "x-stoplight": {
                    readonly id: "8qvrtnzouzp80";
                };
                readonly description: "If set to true then Alpaca will accept orders for PTP symbols with no exception. Default is false.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly title: "AccountConfigurations";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly dtbp_check: "entry";
                    readonly trade_confirm_email: "all";
                    readonly suspend_trade: false;
                    readonly no_shorting: false;
                    readonly fractional_trading: true;
                    readonly max_margin_multiplier: "4";
                    readonly pdt_check: "entry";
                };
            };
            readonly description: "The account configuration API provides custom configurations about your trading account settings. These configurations control various allow you to modify settings to suit your trading needs.";
            readonly properties: {
                readonly dtbp_check: {
                    readonly type: "string";
                    readonly description: "both, entry, or exit. Controls Day Trading Margin Call (DTMC) checks.\n\n`both` `entry` `exit`";
                    readonly enum: readonly ["both", "entry", "exit"];
                };
                readonly trade_confirm_email: {
                    readonly type: "string";
                    readonly description: "all or none. If none, emails for order fills are not sent.";
                };
                readonly suspend_trade: {
                    readonly type: "boolean";
                    readonly description: "If true, new orders are blocked.";
                };
                readonly no_shorting: {
                    readonly type: "boolean";
                    readonly description: "If true, account becomes long-only mode.";
                };
                readonly fractional_trading: {
                    readonly type: "boolean";
                    readonly description: "If true, account is able to participate in fractional trading";
                };
                readonly max_margin_multiplier: {
                    readonly type: "string";
                    readonly description: "Can be \"1\", \"2\", or \"4\"";
                };
                readonly max_options_trading_level: {
                    readonly type: "integer";
                    readonly description: "The desired maximum options trading level. 0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n\n`1` `2` `3`";
                    readonly enum: readonly [0, 1, 2, 3];
                };
                readonly pdt_check: {
                    readonly type: "string";
                    readonly description: "`both`, `entry`, or `exit`. If entry orders will be rejected on entering a position if it could result in PDT being set for the account. exit will reject exiting orders if they would result in PDT being set.";
                    readonly examples: readonly ["entry"];
                };
                readonly ptp_no_exception_entry: {
                    readonly type: "boolean";
                    readonly "x-stoplight": {
                        readonly id: "8qvrtnzouzp80";
                    };
                    readonly description: "If set to true then Alpaca will accept orders for PTP symbols with no exception. Default is false.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchOrderByOrderId: {
    readonly body: {
        readonly title: "PatchOrderRequest";
        readonly type: "object";
        readonly description: "Represents a request to patch an order.";
        readonly properties: {
            readonly qty: {
                readonly type: "string";
                readonly description: "number of shares to trade.\n\nYou can only patch full shares for now.\n\nQty of equity fractional/notional orders are not allowed to change.";
                readonly examples: readonly ["4"];
            };
            readonly time_in_force: {
                readonly type: "string";
                readonly title: "TimeInForce";
                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.";
                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                readonly examples: readonly ["day"];
            };
            readonly limit_price: {
                readonly type: "string";
                readonly description: "Required if original order's `type` field was `limit` or `stop_limit`.\nIn case of `mleg`, the limit_price parameter is expressed with the following notation:\n- A positive value indicates a debit, representing a cost or payment to be made.\n- A negative value signifies a credit, reflecting an amount to be received.";
                readonly examples: readonly ["3.14"];
            };
            readonly stop_price: {
                readonly type: "string";
                readonly description: "required if original order type is limit or stop_limit";
                readonly examples: readonly ["3.14"];
            };
            readonly trail: {
                readonly type: "string";
                readonly description: "the new value of the trail_price or trail_percent value (works only for type=“trailing_stop”)";
                readonly examples: readonly ["3.14"];
            };
            readonly client_order_id: {
                readonly type: "string";
                readonly description: "A unique identifier for the new order. Automatically generated if not sent. (<= 128 characters)";
                readonly maxLength: 128;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "order id";
                };
            };
            readonly required: readonly ["order_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
            readonly type: "object";
            readonly title: "Order";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Order ID";
                };
                readonly client_order_id: {
                    readonly type: "string";
                    readonly description: "Client unique order ID";
                    readonly maxLength: 128;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly submitted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly filled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly expired_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly failed_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_by: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order was replaced by";
                };
                readonly replaces: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order replaces";
                };
                readonly asset_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "Asset ID (For options this represents the option contract ID)";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Asset symbol, required for all order classes except for `mleg`";
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly notional: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                };
                readonly qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                };
                readonly filled_qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Filled quantity";
                };
                readonly filled_avg_price: {
                    readonly type: "string";
                    readonly description: "Filled average price";
                };
                readonly order_class: {
                    readonly type: "string";
                    readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                    readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                    readonly title: "OrderClass";
                    readonly examples: readonly ["bracket"];
                };
                readonly order_type: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "Deprecated in favour of the field \"type\" ";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                    readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                    readonly title: "OrderType";
                    readonly examples: readonly ["market"];
                };
                readonly side: {
                    readonly type: "string";
                    readonly enum: readonly ["buy", "sell"];
                    readonly title: "OrderSide";
                    readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                    readonly examples: readonly ["buy"];
                };
                readonly time_in_force: {
                    readonly type: "string";
                    readonly title: "TimeInForce";
                    readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                    readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                    readonly examples: readonly ["day"];
                };
                readonly limit_price: {
                    readonly type: "string";
                    readonly description: "Limit price";
                };
                readonly stop_price: {
                    readonly description: "Stop price";
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly title: "OrderStatus";
                    readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                    readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                    readonly examples: readonly ["new"];
                };
                readonly extended_hours: {
                    readonly type: "boolean";
                    readonly description: "If true, eligible for execution outside regular trading hours.";
                };
                readonly legs: {
                    readonly type: "array";
                    readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                    readonly items: {
                        readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                        readonly type: "object";
                        readonly title: "Order";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Order ID";
                            };
                            readonly client_order_id: {
                                readonly type: "string";
                                readonly description: "Client unique order ID";
                                readonly maxLength: 128;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly submitted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly filled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expired_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly failed_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order was replaced by";
                            };
                            readonly replaces: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order replaces";
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID (For options this represents the option contract ID)";
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Asset symbol";
                            };
                            readonly asset_class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly notional: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                            };
                            readonly qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                            };
                            readonly filled_qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Filled quantity";
                            };
                            readonly filled_avg_price: {
                                readonly type: "string";
                                readonly description: "Filled average price";
                            };
                            readonly order_class: {
                                readonly type: "string";
                                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                readonly title: "OrderClass";
                                readonly examples: readonly ["bracket"];
                            };
                            readonly order_type: {
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Deprecated in favour of the field \"type\" ";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                readonly title: "OrderType";
                                readonly examples: readonly ["market"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly enum: readonly ["buy", "sell"];
                                readonly title: "OrderSide";
                                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                readonly examples: readonly ["buy"];
                            };
                            readonly time_in_force: {
                                readonly type: "string";
                                readonly title: "TimeInForce";
                                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                readonly examples: readonly ["day"];
                            };
                            readonly limit_price: {
                                readonly type: "string";
                                readonly description: "Limit price";
                            };
                            readonly stop_price: {
                                readonly description: "Stop price";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly title: "OrderStatus";
                                readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                readonly examples: readonly ["new"];
                            };
                            readonly extended_hours: {
                                readonly type: "boolean";
                                readonly description: "If true, eligible for execution outside regular trading hours.";
                            };
                            readonly legs: {
                                readonly type: "array";
                                readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                readonly items: {};
                            };
                            readonly trail_percent: {
                                readonly type: "string";
                                readonly description: "The percent value away from the high water mark for trailing stop orders.";
                            };
                            readonly trail_price: {
                                readonly type: "string";
                                readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                            };
                            readonly hwm: {
                                readonly type: "string";
                                readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                            };
                            readonly position_intent: {
                                readonly type: "string";
                                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                readonly title: "PositionIntent";
                                readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                readonly examples: readonly ["buy_to_open"];
                            };
                        };
                        readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                    };
                };
                readonly trail_percent: {
                    readonly type: "string";
                    readonly description: "The percent value away from the high water mark for trailing stop orders.";
                };
                readonly trail_price: {
                    readonly type: "string";
                    readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                };
                readonly hwm: {
                    readonly type: "string";
                    readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                };
                readonly position_intent: {
                    readonly type: "string";
                    readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                    readonly title: "PositionIntent";
                    readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                    readonly examples: readonly ["buy_to_open"];
                };
            };
            readonly required: readonly ["notional", "type", "time_in_force"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly symbol: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "ss5ik56n2ju1s";
                };
                readonly description: "symbol, asset ID, or currency pair to identify the asset to trade, required for all order classes except for `mleg`.";
                readonly examples: readonly ["AAPL"];
            };
            readonly qty: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "o73n1g4sdbylf";
                };
                readonly description: "number of shares to trade. Can be fractionable for only market and day order types. Required for `mleg` order class, represents the number of units to trade of this strategy.";
                readonly examples: readonly ["2"];
            };
            readonly notional: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "0pqrvqmmsladt";
                };
                readonly description: "dollar amount to trade. Cannot work with `qty`. Can only work for market order types and day for time in force.";
            };
            readonly side: {
                readonly type: "string";
                readonly enum: readonly ["buy", "sell"];
                readonly title: "OrderSide";
                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.";
                readonly examples: readonly ["buy"];
            };
            readonly type: {
                readonly type: "string";
                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.";
                readonly title: "OrderType";
                readonly examples: readonly ["market"];
            };
            readonly time_in_force: {
                readonly type: "string";
                readonly title: "TimeInForce";
                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.";
                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                readonly examples: readonly ["day"];
            };
            readonly limit_price: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "0pz01a130upwd";
                };
                readonly description: "Required if type is `limit` or `stop_limit`.\nIn case of `mleg`, the limit_price parameter is expressed with the following notation:\n- A positive value indicates a debit, representing a cost or payment to be made.\n- A negative value signifies a credit, reflecting an amount to be received.";
                readonly examples: readonly ["2100"];
            };
            readonly stop_price: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "ctaacyol2uvib";
                };
                readonly description: "required if type is `stop` or `stop_limit`";
            };
            readonly trail_price: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "eje00dcpg2s0c";
                };
                readonly description: "this or `trail_percent` is required if type is `trailing_stop`";
            };
            readonly trail_percent: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "l72my4e1qz36r";
                };
                readonly description: "this or `trail_price` is required if type is `trailing_stop`";
            };
            readonly extended_hours: {
                readonly type: "boolean";
                readonly "x-stoplight": {
                    readonly id: "gqhf6gxwkrzr8";
                };
                readonly description: "(default) false. If true, order will be eligible to execute in premarket/afterhours. Only works with type limit and time_in_force day.";
            };
            readonly client_order_id: {
                readonly type: "string";
                readonly "x-stoplight": {
                    readonly id: "duyztdwi66wfk";
                };
                readonly description: "A unique identifier for the order. Automatically generated if not sent. (<= 128 characters)";
                readonly maxLength: 128;
            };
            readonly order_class: {
                readonly type: "string";
                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").";
                readonly title: "OrderClass";
                readonly examples: readonly ["bracket"];
            };
            readonly legs: {
                readonly type: "array";
                readonly description: "list of order legs (<= 4)";
                readonly items: {
                    readonly description: "Represents an individual leg of a multi-leg options order.";
                    readonly type: "object";
                    readonly title: "MLegOrderLeg";
                    readonly properties: {
                        readonly side: {
                            readonly type: "string";
                            readonly enum: readonly ["buy", "sell"];
                            readonly title: "OrderSide";
                            readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.";
                            readonly examples: readonly ["buy"];
                        };
                        readonly position_intent: {
                            readonly type: "string";
                            readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                            readonly title: "PositionIntent";
                            readonly description: "Represents the desired position strategy.";
                            readonly examples: readonly ["buy_to_open"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly description: "symbol or asset ID to identify the asset to trade";
                        };
                        readonly ratio_qty: {
                            readonly type: "string";
                            readonly description: "proportional quantity of this leg in relation to the overall multi-leg order qty";
                        };
                    };
                    readonly required: readonly ["symbol", "ratio_qty"];
                };
                readonly maxLength: 4;
            };
            readonly take_profit: {
                readonly type: "object";
                readonly "x-stoplight": {
                    readonly id: "69n8ydy4qssm3";
                };
                readonly description: "Additional parameters for take-profit leg of advanced orders";
                readonly additionalProperties: true;
            };
            readonly stop_loss: {
                readonly type: "object";
                readonly "x-stoplight": {
                    readonly id: "sv926ul53hgsl";
                };
                readonly description: "Additional parameters for stop-loss leg of advanced orders";
                readonly additionalProperties: true;
            };
            readonly position_intent: {
                readonly type: "string";
                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                readonly title: "PositionIntent";
                readonly description: "Represents the desired position strategy.";
                readonly examples: readonly ["buy_to_open"];
            };
        };
        readonly required: readonly ["type", "time_in_force"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly description: "The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.";
            readonly type: "object";
            readonly title: "Order";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Order ID";
                };
                readonly client_order_id: {
                    readonly type: "string";
                    readonly description: "Client unique order ID";
                    readonly maxLength: 128;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly submitted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly filled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly expired_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly failed_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly replaced_by: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order was replaced by";
                };
                readonly replaces: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The order ID that this order replaces";
                };
                readonly asset_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "Asset ID (For options this represents the option contract ID)";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Asset symbol, required for all order classes except for `mleg`";
                };
                readonly asset_class: {
                    readonly type: "string";
                    readonly title: "AssetClass";
                    readonly enum: readonly ["us_equity", "us_option", "crypto"];
                    readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                    readonly "x-examples": {
                        readonly "example-1": "us_equity";
                    };
                    readonly examples: readonly ["us_equity"];
                };
                readonly notional: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                };
                readonly qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.";
                };
                readonly filled_qty: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Filled quantity";
                };
                readonly filled_avg_price: {
                    readonly type: "string";
                    readonly description: "Filled average price";
                };
                readonly order_class: {
                    readonly type: "string";
                    readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                    readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                    readonly title: "OrderClass";
                    readonly examples: readonly ["bracket"];
                };
                readonly order_type: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "Deprecated in favour of the field \"type\" ";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                    readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                    readonly title: "OrderType";
                    readonly examples: readonly ["market"];
                };
                readonly side: {
                    readonly type: "string";
                    readonly enum: readonly ["buy", "sell"];
                    readonly title: "OrderSide";
                    readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                    readonly examples: readonly ["buy"];
                };
                readonly time_in_force: {
                    readonly type: "string";
                    readonly title: "TimeInForce";
                    readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                    readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                    readonly examples: readonly ["day"];
                };
                readonly limit_price: {
                    readonly type: "string";
                    readonly description: "Limit price";
                };
                readonly stop_price: {
                    readonly description: "Stop price";
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly title: "OrderStatus";
                    readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                    readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                    readonly examples: readonly ["new"];
                };
                readonly extended_hours: {
                    readonly type: "boolean";
                    readonly description: "If true, eligible for execution outside regular trading hours.";
                };
                readonly legs: {
                    readonly type: "array";
                    readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.";
                    readonly items: {
                        readonly description: "This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs";
                        readonly type: "object";
                        readonly title: "Order";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Order ID";
                            };
                            readonly client_order_id: {
                                readonly type: "string";
                                readonly description: "Client unique order ID";
                                readonly maxLength: 128;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly submitted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly filled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expired_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly failed_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order was replaced by";
                            };
                            readonly replaces: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "The order ID that this order replaces";
                            };
                            readonly asset_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID (For options this represents the option contract ID)";
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Asset symbol";
                            };
                            readonly asset_class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly notional: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.";
                            };
                            readonly qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.";
                            };
                            readonly filled_qty: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "Filled quantity";
                            };
                            readonly filled_avg_price: {
                                readonly type: "string";
                                readonly description: "Filled average price";
                            };
                            readonly order_class: {
                                readonly type: "string";
                                readonly enum: readonly ["simple", "bracket", "oco", "oto", "mleg", ""];
                                readonly description: "The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or \"\"), oco, oto, bracket.\n  - Options trading:\n    - simple (or \"\")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or \"\").\n\n`simple` `bracket` `oco` `oto` `mleg`";
                                readonly title: "OrderClass";
                                readonly examples: readonly ["bracket"];
                            };
                            readonly order_type: {
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Deprecated in favour of the field \"type\" ";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["market", "limit", "stop", "stop_limit", "trailing_stop"];
                                readonly description: "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.\n\n`market` `limit` `stop` `stop_limit` `trailing_stop`";
                                readonly title: "OrderType";
                                readonly examples: readonly ["market"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly enum: readonly ["buy", "sell"];
                                readonly title: "OrderSide";
                                readonly description: "Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.\n\n`buy` `sell`";
                                readonly examples: readonly ["buy"];
                            };
                            readonly time_in_force: {
                                readonly type: "string";
                                readonly title: "TimeInForce";
                                readonly description: "The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce(DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit “market on open” (MOO) and “limit on open” (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day’s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange’s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit “market on close” (MOC) and “limit on close” (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day’s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.\n\n`day` `gtc` `opg` `cls` `ioc` `fok`";
                                readonly enum: readonly ["day", "gtc", "opg", "cls", "ioc", "fok"];
                                readonly examples: readonly ["day"];
                            };
                            readonly limit_price: {
                                readonly type: "string";
                                readonly description: "Limit price";
                            };
                            readonly stop_price: {
                                readonly description: "Stop price";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly title: "OrderStatus";
                                readonly description: "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn’t yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.\n\n`new` `partially_filled` `filled` `done_for_day` `canceled` `expired` `replaced` `pending_cancel` `pending_replace` `accepted` `pending_new` `accepted_for_bidding` `stopped` `rejected` `suspended` `calculated`";
                                readonly enum: readonly ["new", "partially_filled", "filled", "done_for_day", "canceled", "expired", "replaced", "pending_cancel", "pending_replace", "accepted", "pending_new", "accepted_for_bidding", "stopped", "rejected", "suspended", "calculated"];
                                readonly examples: readonly ["new"];
                            };
                            readonly extended_hours: {
                                readonly type: "boolean";
                                readonly description: "If true, eligible for execution outside regular trading hours.";
                            };
                            readonly legs: {
                                readonly type: "array";
                                readonly description: "When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.";
                                readonly items: {};
                            };
                            readonly trail_percent: {
                                readonly type: "string";
                                readonly description: "The percent value away from the high water mark for trailing stop orders.";
                            };
                            readonly trail_price: {
                                readonly type: "string";
                                readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                            };
                            readonly hwm: {
                                readonly type: "string";
                                readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                            };
                            readonly position_intent: {
                                readonly type: "string";
                                readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                                readonly title: "PositionIntent";
                                readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                                readonly examples: readonly ["buy_to_open"];
                            };
                        };
                        readonly required: readonly ["symbol", "notional", "qty", "type", "side", "time_in_force"];
                    };
                };
                readonly trail_percent: {
                    readonly type: "string";
                    readonly description: "The percent value away from the high water mark for trailing stop orders.";
                };
                readonly trail_price: {
                    readonly type: "string";
                    readonly description: "The dollar value away from the high water mark for trailing stop orders.";
                };
                readonly hwm: {
                    readonly type: "string";
                    readonly description: "The highest (lowest) market price seen since the trailing stop order was submitted.";
                };
                readonly position_intent: {
                    readonly type: "string";
                    readonly enum: readonly ["buy_to_open", "buy_to_close", "sell_to_open", "sell_to_close"];
                    readonly title: "PositionIntent";
                    readonly description: "Represents the desired position strategy.\n\n`buy_to_open` `buy_to_close` `sell_to_open` `sell_to_close`";
                    readonly examples: readonly ["buy_to_open"];
                };
            };
            readonly required: readonly ["notional", "type", "time_in_force"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostWatchlist: {
    readonly body: {
        readonly title: "PostWatchlistRequest";
        readonly type: "object";
        readonly description: "Request format used for creating a new watchlist or updating an existing watchlist with a set of assets and name.";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly symbols: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RemoveAssetFromWatchlist: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly watchlist_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Watchlist ID";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "symbol name to remove from the watchlist content";
                };
            };
            readonly required: readonly ["watchlist_id", "symbol"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateWatchlistById: {
    readonly body: {
        readonly title: "PostWatchlistRequest";
        readonly type: "object";
        readonly description: "Request format used for creating a new watchlist or updating an existing watchlist with a set of assets and name.";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly symbols: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly watchlist_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "watchlist id";
                };
            };
            readonly required: readonly ["watchlist_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateWatchlistByName: {
    readonly body: {
        readonly title: "PostWatchlistRequest";
        readonly type: "object";
        readonly description: "Request format used for creating a new watchlist or updating an existing watchlist with a set of assets and name.";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly symbols: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "name of the watchlist";
                };
            };
            readonly required: readonly ["name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The watchlist API provides CRUD operation for the account’s watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n";
            readonly type: "object";
            readonly "x-examples": {
                readonly "example-1": {
                    readonly id: "3174d6df-7726-44b4-a5bd-7fda5ae6e009";
                    readonly account_id: "abe25343-a7ba-4255-bdeb-f7e013e9ee5d";
                    readonly created_at: "2022-01-31T21:49:05.14628Z";
                    readonly updated_at: "2022-01-31T21:49:05.14628Z";
                    readonly name: "Primary Watchlist";
                    readonly assets: readonly [{
                        readonly id: "8ccae427-5dd0-45b3-b5fe-7ba5e422c766";
                        readonly class: "us_equity";
                        readonly exchange: "NASDAQ";
                        readonly symbol: "TSLA";
                        readonly name: "Tesla, Inc. Common Stock";
                        readonly status: "active";
                        readonly tradable: true;
                        readonly marginable: true;
                        readonly shortable: true;
                        readonly easy_to_borrow: true;
                        readonly fractionable: true;
                    }];
                };
            };
            readonly title: "Watchlist";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "watchlist id";
                };
                readonly account_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "account ID";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "user-defined watchlist name (up to 64 characters)";
                };
                readonly assets: {
                    readonly type: "array";
                    readonly description: "the content of this watchlist, in the order as registered by the client";
                    readonly items: {
                        readonly description: "The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n";
                        readonly type: "object";
                        readonly "x-examples": {
                            readonly "example-1": {
                                readonly id: "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415";
                                readonly class: "us_equity";
                                readonly exchange: "NASDAQ";
                                readonly symbol: "AAPL";
                                readonly name: "Apple Inc. Common Stock";
                                readonly status: "active";
                                readonly tradable: true;
                                readonly marginable: true;
                                readonly shortable: true;
                                readonly easy_to_borrow: true;
                                readonly fractionable: true;
                            };
                        };
                        readonly title: "Assets";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly description: "Asset ID";
                            };
                            readonly class: {
                                readonly type: "string";
                                readonly title: "AssetClass";
                                readonly enum: readonly ["us_equity", "us_option", "crypto"];
                                readonly description: "This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including \"us_equity\" for U.S. equities, \"us_option\" for U.S. options, and \"crypto\" for cryptocurrencies.\n\n`us_equity` `us_option` `crypto`";
                                readonly "x-examples": {
                                    readonly "example-1": "us_equity";
                                };
                                readonly examples: readonly ["us_equity"];
                            };
                            readonly exchange: {
                                readonly title: "Exchange";
                                readonly type: "string";
                                readonly description: "Represents the current exchanges Alpaca supports. List is currently:\n\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n\n`AMEX` `ARCA` `BATS` `NYSE` `NASDAQ` `NYSEARCA` `OTC`";
                                readonly enum: readonly ["AMEX", "ARCA", "BATS", "NYSE", "NASDAQ", "NYSEARCA", "OTC"];
                                readonly examples: readonly ["NYSE"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly description: "The symbol of the asset";
                                readonly examples: readonly ["AAPL"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly description: "The official name of the asset";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "active or inactive\n\n`active` `inactive`";
                                readonly enum: readonly ["active", "inactive"];
                                readonly examples: readonly ["active"];
                            };
                            readonly tradable: {
                                readonly type: "boolean";
                                readonly description: "Asset is tradable on Alpaca or not";
                            };
                            readonly marginable: {
                                readonly type: "boolean";
                                readonly description: "Asset is marginable or not";
                            };
                            readonly shortable: {
                                readonly type: "boolean";
                                readonly description: "Asset is shortable or not";
                            };
                            readonly easy_to_borrow: {
                                readonly type: "boolean";
                                readonly description: "Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short at Alpaca).";
                            };
                            readonly fractionable: {
                                readonly type: "boolean";
                                readonly description: "Asset is fractionable or not";
                            };
                            readonly maintenance_margin_requirement: {
                                readonly type: "number";
                                readonly "x-stoplight": {
                                    readonly id: "kujwjd2dcq9bn";
                                };
                                readonly deprecated: true;
                                readonly description: "**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n";
                            };
                            readonly margin_requirement_long: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's long positions (equities only).";
                            };
                            readonly margin_requirement_short: {
                                readonly type: "string";
                                readonly description: "The margin requirement percentage for the asset's short positions (equities only).";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly "x-stoplight": {
                                    readonly id: "40mjg4fj0ykl8";
                                };
                                readonly description: "One of `ptp_no_exception`, `ptp_with_exception`, `ipo`, `has_options`, or `options_late_close`. We will include unique characteristics of the asset here.";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ptp_no_exception", "ptp_with_exception", "ipo", "has_options", "options_late_close"];
                                    readonly description: "`ptp_no_exception` `ptp_with_exception` `ipo` `has_options` `options_late_close`";
                                };
                                readonly examples: readonly ["ptp_no_exception", "ipo"];
                            };
                        };
                        readonly required: readonly ["id", "class", "exchange", "symbol", "name", "status", "tradable", "marginable", "shortable", "easy_to_borrow", "fractionable"];
                    };
                };
            };
            readonly required: readonly ["id", "account_id", "created_at", "updated_at", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UsTreasuries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly subtype: {
                    readonly type: "string";
                    readonly description: "The subtype of the treasury.";
                    readonly enum: readonly ["bond", "bill", "note", "strips", "tips", "floating"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly bond_status: {
                    readonly description: "Status of the bond";
                    readonly type: "string";
                    readonly enum: readonly ["outstanding", "matured", "pre_issuance"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cusips: {
                    readonly type: "string";
                    readonly examples: readonly ["912810UG1,912797PM3"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma-separated list of CUSIPs with a limit of 1000.";
                };
                readonly isins: {
                    readonly type: "string";
                    readonly examples: readonly ["US912810UG12,US912797PM34"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma-separated list of ISINs with a limit of 1000.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly us_treasuries: {
                    readonly type: "array";
                    readonly items: {
                        readonly description: "A US treasury";
                        readonly type: "object";
                        readonly properties: {
                            readonly cusip: {
                                readonly description: "CUSIP is a nine-character alphanumeric code that uniquely identifies the security";
                                readonly type: "string";
                                readonly minLength: 12;
                                readonly maxLength: 12;
                                readonly pattern: "^[A-Z0-9]{9}$";
                            };
                            readonly isin: {
                                readonly description: "International Securities Identification Number";
                                readonly type: "string";
                                readonly minLength: 12;
                                readonly maxLength: 12;
                                readonly pattern: "^[A-Z]{2}[A-Z0-9]{9}[0-9]$";
                            };
                            readonly bond_status: {
                                readonly description: "Status of the bond\n\n`outstanding` `matured` `pre_issuance`";
                                readonly type: "string";
                                readonly enum: readonly ["outstanding", "matured", "pre_issuance"];
                            };
                            readonly tradable: {
                                readonly description: "Whether the treasury is tradable";
                                readonly type: "boolean";
                            };
                            readonly subtype: {
                                readonly type: "string";
                                readonly description: "The subtype of the treasury.\n\n`bond` `bill` `note` `strips` `tips` `floating`";
                                readonly enum: readonly ["bond", "bill", "note", "strips", "tips", "floating"];
                            };
                            readonly issue_date: {
                                readonly description: "The date on which the bond was issued";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly maturity_date: {
                                readonly description: "The date on which the bond matures";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly description: {
                                readonly description: "Description of the treasury";
                                readonly type: "string";
                            };
                            readonly description_short: {
                                readonly description: "Short description of the treasury";
                                readonly type: "string";
                            };
                            readonly close_price: {
                                readonly description: "The price of the last transaction of a security before the market closes for normal trading, shown as a percentage of par value";
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly close_price_date: {
                                readonly description: "The date of the close price";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly close_yield_to_maturity: {
                                readonly description: "Yield to maturity of the treasury after the last close";
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly close_yield_to_worst: {
                                readonly description: "Yield to worst of the treasury after the last close";
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly coupon: {
                                readonly description: "The annual interest rate paid on the bond as a percentage of par value";
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly coupon_type: {
                                readonly description: "The type of the coupon rate\n\n`fixed` `floating` `zero`";
                                readonly type: "string";
                                readonly enum: readonly ["fixed", "floating", "zero"];
                            };
                            readonly coupon_frequency: {
                                readonly description: "How often the coupon is paid\n\n`annual` `semi_annual` `quarterly` `monthly` `zero`";
                                readonly type: "string";
                                readonly enum: readonly ["annual", "semi_annual", "quarterly", "monthly", "zero"];
                            };
                            readonly first_coupon_date: {
                                readonly description: "The date of the first coupon payment";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly next_coupon_date: {
                                readonly description: "The date of the next coupon payment";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly last_coupon_date: {
                                readonly description: "The date of the last coupon payment";
                                readonly type: "string";
                                readonly format: "date";
                            };
                        };
                        readonly required: readonly ["cusip", "isin", "bond_status", "tradable", "subtype", "issue_date", "maturity_date", "description", "description_short", "coupon", "coupon_type", "coupon_frequency"];
                    };
                };
            };
            readonly required: readonly ["us_treasuries"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly "X-RateLimit-Limit": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute.";
                };
                readonly "X-RateLimit-Remaining": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute remaining.";
                };
                readonly "X-RateLimit-Reset": {
                    readonly type: "integer";
                    readonly description: "The UNIX epoch when the remaining quota changes.";
                };
            };
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly "X-RateLimit-Limit": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute.";
                };
                readonly "X-RateLimit-Remaining": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute remaining.";
                };
                readonly "X-RateLimit-Reset": {
                    readonly type: "integer";
                    readonly description: "The UNIX epoch when the remaining quota changes.";
                };
            };
        };
    };
};
export { AddAssetToWatchlist, AddAssetToWatchlistByName, CreateCryptoTransferForAccount, CreateWhitelistedAddress, DeleteAllOpenPositions, DeleteAllOrders, DeleteOpenPosition, DeleteOrderByOrderId, DeleteWatchlistById, DeleteWatchlistByName, DeleteWhitelistedAddress, GetAccount, GetAccountActivities, GetAccountActivitiesByActivityType, GetAccountConfig, GetAccountPortfolioHistory, GetAllOpenPositions, GetAllOrders, GetCalendar, GetClock, GetCryptoFundingTransfer, GetCryptoTransferEstimate, GetOpenPosition, GetOptionContractSymbolOrId, GetOptionsContracts, GetOrderByClientOrderId, GetOrderByOrderId, GetV2Assets, GetV2AssetsSymbolOrAssetId, GetV2CorporateActionsAnnouncements, GetV2CorporateActionsAnnouncementsId, GetWatchlistById, GetWatchlistByName, GetWatchlists, ListCryptoFundingTransfers, ListCryptoFundingWallets, ListWhitelistedAddress, OptionExercise, PatchAccountConfig, PatchOrderByOrderId, PostOrder, PostWatchlist, RemoveAssetFromWatchlist, UpdateWatchlistById, UpdateWatchlistByName, UsTreasuries };
