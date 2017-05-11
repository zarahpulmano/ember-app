import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
    primaryKey: 'vehicleMovementId',
    serialize(object, request) {
      let json = RestSerializer.prototype.serialize.apply(this, arguments);
      json.meta = {
        "totalPages": object.totalPages,
        "page": object.page,
        "perPage": object.perPage,
        "total":object.total
      };
      
    return json;
}

});
