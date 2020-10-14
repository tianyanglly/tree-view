<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/14 0014
 * Time: 下午 2:43
 */

namespace TreeView\Controller;

interface Structure
{
    /**
     * @param array $column
     * @return mixed
     */
    public function buildCatalog(array $column = ['id']);

    /**
     * @param array $column
     * @return mixed
     */
    public function buildRhizome(array $column = ['id']);

    /**
     * @param $id
     * @param $label
     * @param $value
     * 显示的字段默认值 根据层级深度填入元素个数
     * @param array $default
     * @return mixed
     */
    public function buildSelect($id, $label, $value, array $default = []);

    /**
     * @param $id
     * @return mixed
     */
    public function getTreeData($id);

    /**
     * @param $action
     * @param $data
     * @return mixed
     */
    public function operateNode($action, $data);
}
