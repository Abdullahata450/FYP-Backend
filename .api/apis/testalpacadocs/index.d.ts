import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Returns your account details.
     *
     * @summary Get Account
     */
    getAccount(): Promise<FetchResponse<200, types.GetAccountResponse200>>;
    /**
     * Places a new order for the given account. An order request may be rejected if the
     * account is not authorized for trading, or if the tradable balance is insufficient to
     * fill the order.
     *
     * @summary Create an Order
     */
    postOrder(body: types.PostOrderBodyParam): Promise<FetchResponse<200, types.PostOrderResponse200>>;
    /**
     * Retrieves a list of orders for the account, filtered by the supplied query parameters.
     *
     * @summary Get All Orders
     */
    getAllOrders(metadata?: types.GetAllOrdersMetadataParam): Promise<FetchResponse<200, types.GetAllOrdersResponse200>>;
    /**
     * Attempts to cancel all open orders. A response will be provided for each order that is
     * attempted to be cancelled. If an order is no longer cancelable, the server will respond
     * with status 500 and reject the request.
     *
     * @summary Delete All Orders
     */
    deleteAllOrders(): Promise<FetchResponse<207, types.DeleteAllOrdersResponse207>>;
    /**
     * Retrieves a single order specified by the client order ID.
     *
     * @summary Get Order by Client Order ID
     */
    getOrderByClientOrderId(metadata: types.GetOrderByClientOrderIdMetadataParam): Promise<FetchResponse<200, types.GetOrderByClientOrderIdResponse200>>;
    /**
     * Retrieves a single order for the given order_id.
     *
     * @summary Get Order by ID
     */
    getOrderByOrderID(metadata: types.GetOrderByOrderIdMetadataParam): Promise<FetchResponse<200, types.GetOrderByOrderIdResponse200>>;
    /**
     * Replaces a single order with updated parameters. Each parameter overrides the
     * corresponding attribute of the existing order. The other attributes remain the same as
     * the existing order.
     *
     * A success return code from a replaced order does NOT guarantee the existing open order
     * has been replaced. If the existing open order is filled before the replacing (new) order
     * reaches the execution venue, the replacing (new) order is rejected, and these events are
     * sent in the trade_updates stream channel.
     *
     * While an order is being replaced, buying power is reduced by the larger of the two
     * orders that have been placed (the old order being replaced, and the newly placed order
     * to replace it). If you are replacing a buy entry order with a higher limit price than
     * the original order, the buying power is calculated based on the newly placed order. If
     * you are replacing it with a lower limit price, the buying power is calculated based on
     * the old order.
     *
     * Note: Order cannot be replaced when the status is `accepted`, `pending_new`,
     * `pending_cancel` or `pending_replace`.
     *
     * @summary Replace Order by ID
     */
    patchOrderByOrderId(body: types.PatchOrderByOrderIdBodyParam, metadata: types.PatchOrderByOrderIdMetadataParam): Promise<FetchResponse<200, types.PatchOrderByOrderIdResponse200>>;
    /**
     * Attempts to cancel an Open Order. If the order is no longer cancelable, the request will
     * be rejected with status 422; otherwise accepted with return status 204.
     *
     * @summary Delete Order by ID
     */
    deleteOrderByOrderID(metadata: types.DeleteOrderByOrderIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * The positions API provides information about an account’s current open positions. The
     * response will include information such as cost basis, shares traded, and market value,
     * which will be updated live as price information is updated. Once a position is closed,
     * it will no longer be queryable through this API
     *
     * Retrieves a list of the account’s open positions
     *
     * @summary All Open Positions
     */
    getAllOpenPositions(): Promise<FetchResponse<200, types.GetAllOpenPositionsResponse200>>;
    /**
     * Closes (liquidates) all of the account’s open long and short positions. A response will
     * be provided for each order that is attempted to be cancelled. If an order is no longer
     * cancelable, the server will respond with status 500 and reject the request.
     *
     * @summary Close All Positions
     */
    deleteAllOpenPositions(metadata?: types.DeleteAllOpenPositionsMetadataParam): Promise<FetchResponse<207, types.DeleteAllOpenPositionsResponse207>>;
    /**
     * Retrieves the account’s open position for the given symbol or assetId.
     *
     * @summary Get an Open Position
     */
    getOpenPosition(metadata: types.GetOpenPositionMetadataParam): Promise<FetchResponse<200, types.GetOpenPositionResponse200>>;
    /**
     * Closes (liquidates) the account’s open position for the given symbol. Works for both
     * long and short positions.
     *
     * @summary Close a Position
     */
    deleteOpenPosition(metadata: types.DeleteOpenPositionMetadataParam): Promise<FetchResponse<200, types.DeleteOpenPositionResponse200>>;
    /**
     * This endpoint enables users to exercise a held option contract, converting it into the
     * underlying asset based on the specified terms.
     * All available held shares of this option contract will be exercised.
     * By default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry.
     * Exercise requests will be processed immediately once received. Exercise requests
     * submitted between market close and midnight will be rejected to avoid any confusion
     * about when the exercise will settle.
     * To cancel an exercise request or to submit a Do-not-exercise (DNE) instruction, please
     * contact our support team.
     *
     * @summary Exercise an Options Position
     * @throws FetchError<403, types.OptionExerciseResponse403> Forbidden
     *
     * Available position quantity is not sufficient.
     * @throws FetchError<422, types.OptionExerciseResponse422> Invalid Parameters.
     *
     * One or more parameters provided are invalid.
     */
    optionExercise(metadata: types.OptionExerciseMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns timeseries data about equity and profit/loss (P/L) of the account in requested
     * timespan.
     *
     * @summary Get Account Portfolio History
     */
    getAccountPortfolioHistory(metadata?: types.GetAccountPortfolioHistoryMetadataParam): Promise<FetchResponse<200, types.GetAccountPortfolioHistoryResponse200>>;
    /**
     * Returns the list of watchlists registered under the account.
     *
     * @summary Get All Watchlists
     */
    getWatchlists(): Promise<FetchResponse<200, types.GetWatchlistsResponse200>>;
    /**
     * Create a new watchlist with initial set of assets.
     *
     * @summary Create Watchlist
     */
    postWatchlist(body: types.PostWatchlistBodyParam): Promise<FetchResponse<200, types.PostWatchlistResponse200>>;
    /**
     * Returns a watchlist identified by the ID.
     *
     * @summary Get Watchlist by ID
     */
    getWatchlistById(metadata: types.GetWatchlistByIdMetadataParam): Promise<FetchResponse<200, types.GetWatchlistByIdResponse200>>;
    /**
     * Update the name and/or content of watchlist
     *
     * @summary Update Watchlist By Id
     */
    updateWatchlistById(body: types.UpdateWatchlistByIdBodyParam, metadata: types.UpdateWatchlistByIdMetadataParam): Promise<FetchResponse<200, types.UpdateWatchlistByIdResponse200>>;
    /**
     * Append an asset for the symbol to the end of watchlist asset list
     *
     * @summary Add Asset to Watchlist
     */
    addAssetToWatchlist(body: types.AddAssetToWatchlistBodyParam, metadata: types.AddAssetToWatchlistMetadataParam): Promise<FetchResponse<200, types.AddAssetToWatchlistResponse200>>;
    addAssetToWatchlist(metadata: types.AddAssetToWatchlistMetadataParam): Promise<FetchResponse<200, types.AddAssetToWatchlistResponse200>>;
    /**
     * Delete a watchlist. This is a permanent deletion.
     *
     * @summary Delete Watchlist By Id
     */
    deleteWatchlistById(metadata: types.DeleteWatchlistByIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * You can also call GET, PUT, POST and DELETE with watchlist name with another endpoint
     * /v2/watchlists:by_name and query parameter name=<watchlist_name>, instead of
     * /v2/watchlists/{watchlist_id} endpoints
     *
     * Returns a watchlist by name
     *
     * @summary Get Watchlist by Name
     */
    getWatchlistByName(metadata: types.GetWatchlistByNameMetadataParam): Promise<FetchResponse<200, types.GetWatchlistByNameResponse200>>;
    /**
     * Update the name and/or content of watchlist
     *
     * @summary Update Watchlist By Name
     */
    updateWatchlistByName(body: types.UpdateWatchlistByNameBodyParam, metadata: types.UpdateWatchlistByNameMetadataParam): Promise<FetchResponse<200, types.UpdateWatchlistByNameResponse200>>;
    /**
     * Append an asset for the symbol to the end of watchlist asset list
     *
     * @summary Add Asset to Watchlist By Name
     */
    addAssetToWatchlistByName(body: types.AddAssetToWatchlistByNameBodyParam, metadata: types.AddAssetToWatchlistByNameMetadataParam): Promise<FetchResponse<200, types.AddAssetToWatchlistByNameResponse200>>;
    addAssetToWatchlistByName(metadata: types.AddAssetToWatchlistByNameMetadataParam): Promise<FetchResponse<200, types.AddAssetToWatchlistByNameResponse200>>;
    /**
     * Delete a watchlist. This is a permanent deletion.
     *
     * @summary Delete Watchlist By Name
     */
    deleteWatchlistByName(metadata: types.DeleteWatchlistByNameMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete one entry for an asset by symbol name
     *
     * @summary Delete Symbol from Watchlist
     */
    removeAssetFromWatchlist(metadata: types.RemoveAssetFromWatchlistMetadataParam): Promise<FetchResponse<200, types.RemoveAssetFromWatchlistResponse200>>;
    /**
     * gets the current account configuration values
     *
     * @summary Get Account Configurations
     */
    getAccountConfig(): Promise<FetchResponse<200, types.GetAccountConfigResponse200>>;
    /**
     * Updates and returns the current account configuration values
     *
     * @summary Account Configurations
     */
    patchAccountConfig(body?: types.PatchAccountConfigBodyParam): Promise<FetchResponse<200, types.PatchAccountConfigResponse200>>;
    /**
     * Returns a list of activities
     *
     * Notes:
     * * Pagination is handled using the `page_token` and `page_size` parameters.
     * * `page_token` represents the ID of the last item on your current page of results.
     *    For example, if the ID of the last activity in your first response is
     * `20220203000000000::045b3b8d-c566-4bef-b741-2bf598dd6ae7`, you would pass that value as
     * `page_token` to retrieve the next page of results.
     *
     * @summary Retrieve Account Activities
     */
    getAccountActivities(metadata?: types.GetAccountActivitiesMetadataParam): Promise<FetchResponse<200, types.GetAccountActivitiesResponse200>>;
    /**
     * Returns account activity entries for a specific type of activity.
     *
     * @summary Retrieve Account Activities of Specific Type
     */
    getAccountActivitiesByActivityType(metadata: types.GetAccountActivitiesByActivityTypeMetadataParam): Promise<FetchResponse<200, types.GetAccountActivitiesByActivityTypeResponse200>>;
    /**
     * The calendar API serves the full list of market days from 1970 to 2029. It can also be
     * queried by specifying a start and/or end time to narrow down the results. In addition to
     * the dates, the response also contains the specific open and close times for the market
     * days, taking into account early closures.
     *
     * Returns the market calendar.
     *
     * @summary Get Market Calendar info
     */
    getCalendar(metadata?: types.GetCalendarMetadataParam): Promise<FetchResponse<200, types.GetCalendarResponse200>>;
    /**
     * The clock API serves the current market timestamp, whether or not the market is
     * currently open, as well as the times of the next market open and close.
     *
     * Returns the market clock.
     *
     * @summary Get Market Clock info
     */
    getClock(): Promise<FetchResponse<200, types.GetClockResponse200>>;
    /**
     * The assets API serves as the master list of assets available for trade and data
     * consumption from Alpaca. Assets are sorted by asset class, exchange and symbol.
     *
     * @summary Get Assets
     */
    getV2Assets(metadata?: types.GetV2AssetsMetadataParam): Promise<FetchResponse<200, types.GetV2AssetsResponse200>>;
    /**
     * Get the asset model for a given symbol or asset_id. The symbol or asset_id should be
     * passed in as a path parameter.
     *
     * **Note**: For crypto, the symbol has to follow old symbology, e.g. BTCUSD.
     *
     * **Note**: For coin pairs, the symbol should be separated by spare symbol (/), e.g.
     * BTC/USDT. Since spare is a special character in HTTP, use the URL encoded version
     * instead, e.g. /v2/assets/BTC%2FUSDT
     *
     * @summary Get an Asset by ID or Symbol
     */
    getV2AssetsSymbol_or_asset_id(metadata: types.GetV2AssetsSymbolOrAssetIdMetadataParam): Promise<FetchResponse<200, types.GetV2AssetsSymbolOrAssetIdResponse200>>;
    /**
     * This endpoint allows you to retrieve a list of option contracts based on various
     * filtering criteria.
     * By default only active contracts that expire before the upcoming weekend are returned.
     *
     * @summary Get Option Contracts
     */
    getOptionsContracts(metadata?: types.GetOptionsContractsMetadataParam): Promise<FetchResponse<200, types.GetOptionsContractsResponse200>>;
    /**
     * Get an option contract by symbol or contract ID. The symbol or id should be passed in as
     * a path parameter.
     *
     * @summary Get an option contract by ID or Symbol
     * @throws FetchError<404, types.GetOptionContractSymbolOrIdResponse404> Not Found
     */
    getOptionContractSymbol_or_id(metadata: types.GetOptionContractSymbolOrIdMetadataParam): Promise<FetchResponse<200, types.GetOptionContractSymbolOrIdResponse200>>;
    /**
     * Serves the list of US treasuries available at Alpaca. The response is sorted by ISIN.
     *
     * @summary Get US treasuries
     * @throws FetchError<400, types.UsTreasuriesResponse400> One of the request parameters is invalid. See the returned message for details.
     *
     * @throws FetchError<429, types.UsTreasuriesResponse429> Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to
     * make sure you're under the rate limit.
     *
     */
    usTreasuries(metadata?: types.UsTreasuriesMetadataParam): Promise<FetchResponse<200, types.UsTreasuriesResponse200>>;
    /**
     * This endpoint is deprecated, please use [the new corporate actions
     * endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.
     *
     * @summary Retrieve a Specific Announcement
     */
    getV2Corporate_actionsAnnouncementsId(metadata: types.GetV2CorporateActionsAnnouncementsIdMetadataParam): Promise<FetchResponse<200, types.GetV2CorporateActionsAnnouncementsIdResponse200>>;
    /**
     * This endpoint is deprecated, please use [the new corporate actions
     * endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.
     *
     * @summary Retrieve Announcements
     */
    getV2Corporate_actionsAnnouncements(metadata: types.GetV2CorporateActionsAnnouncementsMetadataParam): Promise<FetchResponse<200, types.GetV2CorporateActionsAnnouncementsResponse200>>;
    /**
     * Lists wallets for the account given in the path parameter. If an asset is specified and
     * no wallet for the account and asset pair exists one will be created. If no asset is
     * specified only existing wallets will be listed for the account. An account may have at
     * most one wallet per asset.
     *
     * @summary Retrieve Crypto Funding Wallets
     */
    listCryptoFundingWallets(metadata?: types.ListCryptoFundingWalletsMetadataParam): Promise<FetchResponse<200, types.ListCryptoFundingWalletsResponse200>>;
    /**
     * Returns an array of all transfers associated with the given account across all wallets.
     *
     * @summary Retrieve Crypto Funding Transfers
     */
    listCryptoFundingTransfers(): Promise<FetchResponse<200, types.ListCryptoFundingTransfersResponse200>>;
    /**
     * Creates a withdrawal request. Note that outgoing withdrawals must be sent to a
     * whitelisted address and you must whitelist addresses at least 24 hours in advance. If
     * you attempt to withdraw funds to a non-whitelisted address then the transfer will be
     * rejected.
     *
     * @summary Request a New Withdrawal
     */
    createCryptoTransferForAccount(body: types.CreateCryptoTransferForAccountBodyParam): Promise<FetchResponse<200, types.CreateCryptoTransferForAccountResponse200>>;
    /**
     * Returns a specific wallet transfer by passing into the query the transfer_id.
     *
     * @summary Retrieve a Crypto Funding Transfer
     */
    getCryptoFundingTransfer(metadata: types.GetCryptoFundingTransferMetadataParam): Promise<FetchResponse<200, types.GetCryptoFundingTransferResponse200>>;
    /**
     * An array of whitelisted addresses
     *
     */
    listWhitelistedAddress(): Promise<FetchResponse<200, types.ListWhitelistedAddressResponse200>>;
    /**
     * Request a new whitelisted address
     *
     */
    createWhitelistedAddress(body: types.CreateWhitelistedAddressBodyParam): Promise<FetchResponse<200, types.CreateWhitelistedAddressResponse200>>;
    /**
     * Delete a whitelisted address
     *
     */
    deleteWhitelistedAddress(metadata: types.DeleteWhitelistedAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns the estimated gas fee for a proposed transaction.
     *
     */
    getCryptoTransferEstimate(metadata?: types.GetCryptoTransferEstimateMetadataParam): Promise<FetchResponse<200, types.GetCryptoTransferEstimateResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
