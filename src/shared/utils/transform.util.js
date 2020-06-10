const paginate = (data, options) => {
  const { page, limit, total } = options;
  const totalPage = Math.ceil(total / limit);

  return {
    data,
    page,
    perPage: limit,
    prevPage: page - 1 ? page - 1 : null,
    nextPage: totalPage > page ? page + 1 : null,
    total,
    totalPage,
  };
};

export { paginate as default };
