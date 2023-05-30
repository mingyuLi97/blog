# 基本操作

## 查

```ts
const photoRepository = AppDataSource.getRepository(Photo);
// 查所有
await photoRepository.find();
// 条件查询第一个
await photoRepository.findOneBy({ id: 1 });
// 条件查询所有
await photoRepository.findBy({ isPublished: true });
// 查询实体、数量
const [photos, count] = await photoRepository.findAndCount();
// 取出关系对象的数据，取出的数据会包含 一对一关系的数据
await photoRepository.find({
  relations: {
    metadata: true
  }
});
// 取出关系对象的数据，取出的数据会包含 metadata
await photoRepository
  .createQueryBuilder('photo')
  .innerJoinAndSelect('photo.metadata', 'metadata')
  .getMany();
```

## 增

```typescript
// 创建一条新数据
const photo = new Photo();
photo.name = 'limy';
photo.description = 'I am near polar bears';
photo.filename = 'photo-with-bears.jpg';
photo.isPublished = true;

/**
 * 方式一：使用 Entity Manager
 */
await AppDataSource.manager.save(photo);
/**
 * 方式二：Using Repositories
 */
const photoRepository = AppDataSource.getRepository(Photo);
await photoRepository.save(photo);
```

# 改

```typescript
import { Photo } from './entity/Photo';
import { AppDataSource } from './index';

const photoRepository = AppDataSource.getRepository(Photo);
const photoToUpdate = await photoRepository.findOneBy({
  id: 1
});
photoToUpdate.name = 'Me, my friends and polar bears';
await photoRepository.save(photoToUpdate);
```

# 删

```typescript
import { Photo } from './entity/Photo';
import { AppDataSource } from './index';

const photoRepository = AppDataSource.getRepository(Photo);
const photoToRemove = await photoRepository.findOneBy({
  id: 1
});
await photoRepository.remove(photoToRemove);
```
