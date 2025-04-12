import Oas from 'oas';
import apiPackage from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'testalpacadocs/2.0.1 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Returns your account details.
     *
     * @summary Get Account
     */
    getAccount() {
        return this.core.fetch('/v2/account', 'get');
    }
    /**
     * Places a new order for the given account. An order request may be rejected if the
     * account is not authorized for trading, or if the tradable balance is insufficient to
     * fill the order.
     *
     * @summary Create an Order
     */
    postOrder(body) {
        return this.core.fetch('/v2/orders', 'post', body);
    }
    /**
     * Retrieves a list of orders for the account, filtered by the supplied query parameters.
     *
     * @summary Get All Orders
     */
    getAllOrders(metadata) {
        return this.core.fetch('/v2/orders', 'get', metadata);
    }
    /**
     * Attempts to cancel all open orders. A response will be provided for each order that is
     * attempted to be cancelled. If an order is no longer cancelable, the server will respond
     * with status 500 and reject the request.
     *
     * @summary Delete All Orders
     */
    deleteAllOrders() {
        return this.core.fetch('/v2/orders', 'delete');
    }
    /**
     * Retrieves a single order specified by the client order ID.
     *
     * @summary Get Order by Client Order ID
     */
    getOrderByClientOrderId(metadata) {
        return this.core.fetch('/v2/orders:by_client_order_id', 'get', metadata);
    }
    /**
     * Retrieves a single order for the given order_id.
     *
     * @summary Get Order by ID
     */
    getOrderByOrderID(metadata) {
        return this.core.fetch('/v2/orders/{order_id}', 'get', metadata);
    }
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
    patchOrderByOrderId(body, metadata) {
        return this.core.fetch('/v2/orders/{order_id}', 'patch', body, metadata);
    }
    /**
     * Attempts to cancel an Open Order. If the order is no longer cancelable, the request will
     * be rejected with status 422; otherwise accepted with return status 204.
     *
     * @summary Delete Order by ID
     */
    deleteOrderByOrderID(metadata) {
        return this.core.fetch('/v2/orders/{order_id}', 'delete', metadata);
    }
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
    getAllOpenPositions() {
        return this.core.fetch('/v2/positions', 'get');
    }
    /**
     * Closes (liquidates) all of the account’s open long and short positions. A response will
     * be provided for each order that is attempted to be cancelled. If an order is no longer
     * cancelable, the server will respond with status 500 and reject the request.
     *
     * @summary Close All Positions
     */
    deleteAllOpenPositions(metadata) {
        return this.core.fetch('/v2/positions', 'delete', metadata);
    }
    /**
     * Retrieves the account’s open position for the given symbol or assetId.
     *
     * @summary Get an Open Position
     */
    getOpenPosition(metadata) {
        return this.core.fetch('/v2/positions/{symbol_or_asset_id}', 'get', metadata);
    }
    /**
     * Closes (liquidates) the account’s open position for the given symbol. Works for both
     * long and short positions.
     *
     * @summary Close a Position
     */
    deleteOpenPosition(metadata) {
        return this.core.fetch('/v2/positions/{symbol_or_asset_id}', 'delete', metadata);
    }
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
    optionExercise(metadata) {
        return this.core.fetch('/v2/positions/{symbol_or_contract_id}/exercise', 'post', metadata);
    }
    /**
     * Returns timeseries data about equity and profit/loss (P/L) of the account in requested
     * timespan.
     *
     * @summary Get Account Portfolio History
     */
    getAccountPortfolioHistory(metadata) {
        return this.core.fetch('/v2/account/portfolio/history', 'get', metadata);
    }
    /**
     * Returns the list of watchlists registered under the account.
     *
     * @summary Get All Watchlists
     */
    getWatchlists() {
        return this.core.fetch('/v2/watchlists', 'get');
    }
    /**
     * Create a new watchlist with initial set of assets.
     *
     * @summary Create Watchlist
     */
    postWatchlist(body) {
        return this.core.fetch('/v2/watchlists', 'post', body);
    }
    /**
     * Returns a watchlist identified by the ID.
     *
     * @summary Get Watchlist by ID
     */
    getWatchlistById(metadata) {
        return this.core.fetch('/v2/watchlists/{watchlist_id}', 'get', metadata);
    }
    /**
     * Update the name and/or content of watchlist
     *
     * @summary Update Watchlist By Id
     */
    updateWatchlistById(body, metadata) {
        return this.core.fetch('/v2/watchlists/{watchlist_id}', 'put', body, metadata);
    }
    addAssetToWatchlist(body, metadata) {
        return this.core.fetch('/v2/watchlists/{watchlist_id}', 'post', body, metadata);
    }
    /**
     * Delete a watchlist. This is a permanent deletion.
     *
     * @summary Delete Watchlist By Id
     */
    deleteWatchlistById(metadata) {
        return this.core.fetch('/v2/watchlists/{watchlist_id}', 'delete', metadata);
    }
    /**
     * You can also call GET, PUT, POST and DELETE with watchlist name with another endpoint
     * /v2/watchlists:by_name and query parameter name=<watchlist_name>, instead of
     * /v2/watchlists/{watchlist_id} endpoints
     *
     * Returns a watchlist by name
     *
     * @summary Get Watchlist by Name
     */
    getWatchlistByName(metadata) {
        return this.core.fetch('/v2/watchlists:by_name', 'get', metadata);
    }
    /**
     * Update the name and/or content of watchlist
     *
     * @summary Update Watchlist By Name
     */
    updateWatchlistByName(body, metadata) {
        return this.core.fetch('/v2/watchlists:by_name', 'put', body, metadata);
    }
    addAssetToWatchlistByName(body, metadata) {
        return this.core.fetch('/v2/watchlists:by_name', 'post', body, metadata);
    }
    /**
     * Delete a watchlist. This is a permanent deletion.
     *
     * @summary Delete Watchlist By Name
     */
    deleteWatchlistByName(metadata) {
        return this.core.fetch('/v2/watchlists:by_name', 'delete', metadata);
    }
    /**
     * Delete one entry for an asset by symbol name
     *
     * @summary Delete Symbol from Watchlist
     */
    removeAssetFromWatchlist(metadata) {
        return this.core.fetch('/v2/watchlists/{watchlist_id}/{symbol}', 'delete', metadata);
    }
    /**
     * gets the current account configuration values
     *
     * @summary Get Account Configurations
     */
    getAccountConfig() {
        return this.core.fetch('/v2/account/configurations', 'get');
    }
    /**
     * Updates and returns the current account configuration values
     *
     * @summary Account Configurations
     */
    patchAccountConfig(body) {
        return this.core.fetch('/v2/account/configurations', 'patch', body);
    }
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
    getAccountActivities(metadata) {
        return this.core.fetch('/v2/account/activities', 'get', metadata);
    }
    /**
     * Returns account activity entries for a specific type of activity.
     *
     * @summary Retrieve Account Activities of Specific Type
     */
    getAccountActivitiesByActivityType(metadata) {
        return this.core.fetch('/v2/account/activities/{activity_type}', 'get', metadata);
    }
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
    getCalendar(metadata) {
        return this.core.fetch('/v2/calendar', 'get', metadata);
    }
    /**
     * The clock API serves the current market timestamp, whether or not the market is
     * currently open, as well as the times of the next market open and close.
     *
     * Returns the market clock.
     *
     * @summary Get Market Clock info
     */
    getClock() {
        return this.core.fetch('/v2/clock', 'get');
    }
    /**
     * The assets API serves as the master list of assets available for trade and data
     * consumption from Alpaca. Assets are sorted by asset class, exchange and symbol.
     *
     * @summary Get Assets
     */
    getV2Assets(metadata) {
        return this.core.fetch('/v2/assets', 'get', metadata);
    }
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
    getV2AssetsSymbol_or_asset_id(metadata) {
        return this.core.fetch('/v2/assets/{symbol_or_asset_id}', 'get', metadata);
    }
    /**
     * This endpoint allows you to retrieve a list of option contracts based on various
     * filtering criteria.
     * By default only active contracts that expire before the upcoming weekend are returned.
     *
     * @summary Get Option Contracts
     */
    getOptionsContracts(metadata) {
        return this.core.fetch('/v2/options/contracts', 'get', metadata);
    }
    /**
     * Get an option contract by symbol or contract ID. The symbol or id should be passed in as
     * a path parameter.
     *
     * @summary Get an option contract by ID or Symbol
     * @throws FetchError<404, types.GetOptionContractSymbolOrIdResponse404> Not Found
     */
    getOptionContractSymbol_or_id(metadata) {
        return this.core.fetch('/v2/options/contracts/{symbol_or_id}', 'get', metadata);
    }
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
    usTreasuries(metadata) {
        return this.core.fetch('/v2/assets/fixed_income/us_treasuries', 'get', metadata);
    }
    /**
     * This endpoint is deprecated, please use [the new corporate actions
     * endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.
     *
     * @summary Retrieve a Specific Announcement
     */
    getV2Corporate_actionsAnnouncementsId(metadata) {
        return this.core.fetch('/v2/corporate_actions/announcements/{id}', 'get', metadata);
    }
    /**
     * This endpoint is deprecated, please use [the new corporate actions
     * endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.
     *
     * @summary Retrieve Announcements
     */
    getV2Corporate_actionsAnnouncements(metadata) {
        return this.core.fetch('/v2/corporate_actions/announcements', 'get', metadata);
    }
    /**
     * Lists wallets for the account given in the path parameter. If an asset is specified and
     * no wallet for the account and asset pair exists one will be created. If no asset is
     * specified only existing wallets will be listed for the account. An account may have at
     * most one wallet per asset.
     *
     * @summary Retrieve Crypto Funding Wallets
     */
    listCryptoFundingWallets(metadata) {
        return this.core.fetch('/v2/wallets', 'get', metadata);
    }
    /**
     * Returns an array of all transfers associated with the given account across all wallets.
     *
     * @summary Retrieve Crypto Funding Transfers
     */
    listCryptoFundingTransfers() {
        return this.core.fetch('/v2/wallets/transfers', 'get');
    }
    /**
     * Creates a withdrawal request. Note that outgoing withdrawals must be sent to a
     * whitelisted address and you must whitelist addresses at least 24 hours in advance. If
     * you attempt to withdraw funds to a non-whitelisted address then the transfer will be
     * rejected.
     *
     * @summary Request a New Withdrawal
     */
    createCryptoTransferForAccount(body) {
        return this.core.fetch('/v2/wallets/transfers', 'post', body);
    }
    /**
     * Returns a specific wallet transfer by passing into the query the transfer_id.
     *
     * @summary Retrieve a Crypto Funding Transfer
     */
    getCryptoFundingTransfer(metadata) {
        return this.core.fetch('/v2/wallets/transfers/{transfer_id}', 'get', metadata);
    }
    /**
     * An array of whitelisted addresses
     *
     */
    listWhitelistedAddress() {
        return this.core.fetch('/v2/wallets/whitelists', 'get');
    }
    /**
     * Request a new whitelisted address
     *
     */
    createWhitelistedAddress(body) {
        return this.core.fetch('/v2/wallets/whitelists', 'post', body);
    }
    /**
     * Delete a whitelisted address
     *
     */
    deleteWhitelistedAddress(metadata) {
        return this.core.fetch('/v2/wallets/whitelists/{whitelisted_address_id}', 'delete', metadata);
    }
    /**
     * Returns the estimated gas fee for a proposed transaction.
     *
     */
    getCryptoTransferEstimate(metadata) {
        return this.core.fetch('/v2/wallets/fees/estimate', 'get', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
module.exports = createSDK;
