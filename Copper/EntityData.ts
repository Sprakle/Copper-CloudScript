

/** Retreives all entities and their data belonging to the player who calls */
handlers.getPlayerEntities = function(args: IGetPlayerEntitiesRequest, context): IGetPlayerEntitiesResult{
    log.info("Getting entity data for " + currentPlayerId);
    log.info("test change!");
    return null;
}

interface IGetPlayerEntitiesRequest
{

}

interface IGetPlayerEntitiesResult
{

}