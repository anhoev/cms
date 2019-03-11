function getCollectionPermission(user, collection) {
  if (user.role === 'admin') {
    return 'all';
  }
  const { collectionPermission } = user;
  if (!Array.isArray(collectionPermission)) {
    return null;
  }
  const permission = collectionPermission.find(item => item.collectionName === collection);
  if (permission) {
    return permission.permission;
  }
}

function getQueryCondition(user, collection) {
  if (user.role === 'admin') {
    return 'all';
  }
  const { collectionPermission } = user;
  if (!Array.isArray(collectionPermission)) {
    return null;
  }
  const permission = collectionPermission.find(item => item.collectionName === collection);
  if (permission) {
    return permission.queryCondition;
  }
}

module.exports = {
  getCollectionPermission,
  getQueryCondition
};
