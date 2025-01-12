//8번
nodejs> db.users.updateOne({ name: 'nero' }, { $set: { comment: '안녕하세요 이 필드를 바꿔보겠습니다!' } });
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}

//9번
odejs> db.users.find({}, { _id: 0, name: 1, married: 1 });
[
  { "name" : "zero", "married" : false },
  { "name" : "nero", "married" : true }
]