<?php

namespace TreeView;


use Exception;
use TreeView\Controller\Structure;

class Tree
{
    /**
     * @var Structure
     */
    private $adapter;

    /**
     * 配置
     * @var array
     */
    private $config;

    public function __construct(array $config = [])
    {
        $this->config = $config;
    }

    /**
     * @param Structure $adapter
     * @return self
     */
    public function setAdapter($adapter): self
    {
        $this->adapter = $adapter;
        return $this;
    }

    /**
     * 生成目录式视图
     * @param array $column 显示的字段
     * @return mixed
     * @throws Exception
     */
    public function buildCatalog(array $column = ['id'])
    {
        return $this->adapter->buildCatalog($column);
    }

    /**
     * 生成茎状图
     * @param array $column 显示的字段
     * @return mixed
     * @throws Exception
     */
    public function buildRhizome(array $column = ['id'])
    {
        return $this->adapter->buildRhizome($column);
    }
}
