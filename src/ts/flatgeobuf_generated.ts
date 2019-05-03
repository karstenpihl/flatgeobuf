// automatically generated by the FlatBuffers compiler, do not modify

import { flatbuffers } from "flatbuffers"
/**
 * @enum
 */
export namespace FlatGeobuf{
export enum ColumnType{
  Byte= 0,
  UByte= 1,
  Bool= 2,
  Short= 3,
  UShort= 4,
  Int= 5,
  UInt= 6,
  Long= 7,
  ULong= 8,
  Float= 9,
  Double= 10,
  String= 11,
  Json= 12,
  DateTime= 13
}};

/**
 * @enum
 */
export namespace FlatGeobuf{
export enum GeometryType{
  Point= 0,
  MultiPoint= 1,
  LineString= 2,
  MultiLineString= 3,
  Polygon= 4,
  MultiPolygon= 5
}};

/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Column {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Column
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Column {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Column= obj
 * @returns Column
 */
static getRootAsColumn(bb:flatbuffers.ByteBuffer, obj?:Column):Column {
  return (obj || new Column).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns FlatGeobuf.ColumnType
 */
type():FlatGeobuf.ColumnType {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : FlatGeobuf.ColumnType.Byte;
};

/**
 * @param flatbuffers.Builder builder
 */
static startColumn(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nameOffset
 */
static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param FlatGeobuf.ColumnType type
 */
static addType(builder:flatbuffers.Builder, type:FlatGeobuf.ColumnType) {
  builder.addFieldInt8(1, type, FlatGeobuf.ColumnType.Byte);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endColumn(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // name
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Geometry {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Geometry
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Geometry {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Geometry= obj
 * @returns Geometry
 */
static getRootAsGeometry(bb:flatbuffers.ByteBuffer, obj?:Geometry):Geometry {
  return (obj || new Geometry).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @returns number
 */
ringCounts(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns number
 */
ringCountsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Uint32Array
 */
ringCountsArray():Uint32Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param number index
 * @returns number
 */
ringLengths(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns number
 */
ringLengthsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Uint32Array
 */
ringLengthsArray():Uint32Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param number index
 * @returns number
 */
lengths(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns number
 */
lengthsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Uint32Array
 */
lengthsArray():Uint32Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param number index
 * @returns number
 */
coords(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
};

/**
 * @returns number
 */
coordsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Float64Array
 */
coordsArray():Float64Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startGeometry(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset ringCountsOffset
 */
static addRingCounts(builder:flatbuffers.Builder, ringCountsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, ringCountsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createRingCountsVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startRingCountsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset ringLengthsOffset
 */
static addRingLengths(builder:flatbuffers.Builder, ringLengthsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ringLengthsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createRingLengthsVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startRingLengthsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset lengthsOffset
 */
static addLengths(builder:flatbuffers.Builder, lengthsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, lengthsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createLengthsVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startLengthsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset coordsOffset
 */
static addCoords(builder:flatbuffers.Builder, coordsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, coordsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createCoordsVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startCoordsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endGeometry(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 10); // coords
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Feature {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Feature
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Feature {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Feature= obj
 * @returns Feature
 */
static getRootAsFeature(bb:flatbuffers.ByteBuffer, obj?:Feature):Feature {
  return (obj || new Feature).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns flatbuffers.Long
 */
fid():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @param FlatGeobuf.Geometry= obj
 * @returns FlatGeobuf.Geometry|null
 */
geometry(obj?:FlatGeobuf.Geometry):FlatGeobuf.Geometry|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new FlatGeobuf.Geometry).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
};

/**
 * @param number index
 * @param FlatGeobuf.Value= obj
 * @returns FlatGeobuf.Value
 */
values(index: number, obj?:FlatGeobuf.Value):FlatGeobuf.Value|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new FlatGeobuf.Value).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
valuesLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startFeature(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long fid
 */
static addFid(builder:flatbuffers.Builder, fid:flatbuffers.Long) {
  builder.addFieldInt64(0, fid, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset geometryOffset
 */
static addGeometry(builder:flatbuffers.Builder, geometryOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, geometryOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset valuesOffset
 */
static addValues(builder:flatbuffers.Builder, valuesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, valuesOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createValuesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startValuesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endFeature(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Value {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Value
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Value {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Value= obj
 * @returns Value
 */
static getRootAsValue(bb:flatbuffers.ByteBuffer, obj?:Value):Value {
  return (obj || new Value).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
columnIndex():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
byteValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
ubyteValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns boolean
 */
boolValue():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns number
 */
shortValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
ushortValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
intValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
uintValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns flatbuffers.Long
 */
longValue():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns flatbuffers.Long
 */
ulongValue():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns number
 */
floatValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
doubleValue():number {
  var offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
stringValue():string|null
stringValue(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
stringValue(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
jsonValue():string|null
jsonValue(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
jsonValue(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
datetimeValue():string|null
datetimeValue(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
datetimeValue(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startValue(builder:flatbuffers.Builder) {
  builder.startObject(15);
};

/**
 * @param flatbuffers.Builder builder
 * @param number columnIndex
 */
static addColumnIndex(builder:flatbuffers.Builder, columnIndex:number) {
  builder.addFieldInt16(0, columnIndex, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number byteValue
 */
static addByteValue(builder:flatbuffers.Builder, byteValue:number) {
  builder.addFieldInt8(1, byteValue, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number ubyteValue
 */
static addUbyteValue(builder:flatbuffers.Builder, ubyteValue:number) {
  builder.addFieldInt8(2, ubyteValue, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean boolValue
 */
static addBoolValue(builder:flatbuffers.Builder, boolValue:boolean) {
  builder.addFieldInt8(3, +boolValue, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @param number shortValue
 */
static addShortValue(builder:flatbuffers.Builder, shortValue:number) {
  builder.addFieldInt16(4, shortValue, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number ushortValue
 */
static addUshortValue(builder:flatbuffers.Builder, ushortValue:number) {
  builder.addFieldInt16(5, ushortValue, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number intValue
 */
static addIntValue(builder:flatbuffers.Builder, intValue:number) {
  builder.addFieldInt32(6, intValue, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number uintValue
 */
static addUintValue(builder:flatbuffers.Builder, uintValue:number) {
  builder.addFieldInt32(7, uintValue, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long longValue
 */
static addLongValue(builder:flatbuffers.Builder, longValue:flatbuffers.Long) {
  builder.addFieldInt64(8, longValue, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long ulongValue
 */
static addUlongValue(builder:flatbuffers.Builder, ulongValue:flatbuffers.Long) {
  builder.addFieldInt64(9, ulongValue, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param number floatValue
 */
static addFloatValue(builder:flatbuffers.Builder, floatValue:number) {
  builder.addFieldFloat32(10, floatValue, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number doubleValue
 */
static addDoubleValue(builder:flatbuffers.Builder, doubleValue:number) {
  builder.addFieldFloat64(11, doubleValue, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset stringValueOffset
 */
static addStringValue(builder:flatbuffers.Builder, stringValueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, stringValueOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset jsonValueOffset
 */
static addJsonValue(builder:flatbuffers.Builder, jsonValueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, jsonValueOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset datetimeValueOffset
 */
static addDatetimeValue(builder:flatbuffers.Builder, datetimeValueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, datetimeValueOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endValue(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Index {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Index
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Index {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Index= obj
 * @returns Index
 */
static getRootAsIndex(bb:flatbuffers.ByteBuffer, obj?:Index):Index {
  return (obj || new Index).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
nodeSize():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 16;
};

/**
 * @returns number
 */
offsetSize():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 4;
};

/**
 * @param flatbuffers.Builder builder
 */
static startIndex(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number nodeSize
 */
static addNodeSize(builder:flatbuffers.Builder, nodeSize:number) {
  builder.addFieldInt16(0, nodeSize, 16);
};

/**
 * @param flatbuffers.Builder builder
 * @param number offsetSize
 */
static addOffsetSize(builder:flatbuffers.Builder, offsetSize:number) {
  builder.addFieldInt8(1, offsetSize, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endIndex(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Srs {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Srs
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Srs {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Srs= obj
 * @returns Srs
 */
static getRootAsSrs(bb:flatbuffers.ByteBuffer, obj?:Srs):Srs {
  return (obj || new Srs).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
code():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
org():string|null
org(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
org(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startSrs(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number code
 */
static addCode(builder:flatbuffers.Builder, code:number) {
  builder.addFieldInt32(0, code, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset orgOffset
 */
static addOrg(builder:flatbuffers.Builder, orgOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, orgOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endSrs(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatGeobuf{
export class Header {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Header
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Header {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Header= obj
 * @returns Header
 */
static getRootAsHeader(bb:flatbuffers.ByteBuffer, obj?:Header):Header {
  return (obj || new Header).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param number index
 * @returns number
 */
envelope(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
};

/**
 * @returns number
 */
envelopeLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Float64Array
 */
envelopeArray():Float64Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns FlatGeobuf.GeometryType
 */
geometryType():FlatGeobuf.GeometryType {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : FlatGeobuf.GeometryType.Point;
};

/**
 * @returns number
 */
dimensions():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 2;
};

/**
 * @param number index
 * @param FlatGeobuf.Column= obj
 * @returns FlatGeobuf.Column
 */
columns(index: number, obj?:FlatGeobuf.Column):FlatGeobuf.Column|null {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new FlatGeobuf.Column).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
columnsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns flatbuffers.Long
 */
featuresCount():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns boolean
 */
fids():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
};

/**
 * @param FlatGeobuf.Index= obj
 * @returns FlatGeobuf.Index|null
 */
index(obj?:FlatGeobuf.Index):FlatGeobuf.Index|null {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new FlatGeobuf.Index).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
};

/**
 * @param FlatGeobuf.Srs= obj
 * @returns FlatGeobuf.Srs|null
 */
srs(obj?:FlatGeobuf.Srs):FlatGeobuf.Srs|null {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new FlatGeobuf.Srs).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHeader(builder:flatbuffers.Builder) {
  builder.startObject(9);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nameOffset
 */
static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset envelopeOffset
 */
static addEnvelope(builder:flatbuffers.Builder, envelopeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, envelopeOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createEnvelopeVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startEnvelopeVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param flatbuffers.Builder builder
 * @param FlatGeobuf.GeometryType geometryType
 */
static addGeometryType(builder:flatbuffers.Builder, geometryType:FlatGeobuf.GeometryType) {
  builder.addFieldInt8(2, geometryType, FlatGeobuf.GeometryType.Point);
};

/**
 * @param flatbuffers.Builder builder
 * @param number dimensions
 */
static addDimensions(builder:flatbuffers.Builder, dimensions:number) {
  builder.addFieldInt8(3, dimensions, 2);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset columnsOffset
 */
static addColumns(builder:flatbuffers.Builder, columnsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, columnsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createColumnsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startColumnsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long featuresCount
 */
static addFeaturesCount(builder:flatbuffers.Builder, featuresCount:flatbuffers.Long) {
  builder.addFieldInt64(5, featuresCount, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean fids
 */
static addFids(builder:flatbuffers.Builder, fids:boolean) {
  builder.addFieldInt8(6, +fids, +true);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset indexOffset
 */
static addIndex(builder:flatbuffers.Builder, indexOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, indexOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset srsOffset
 */
static addSrs(builder:flatbuffers.Builder, srsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, srsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHeader(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishHeaderBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

}
}
